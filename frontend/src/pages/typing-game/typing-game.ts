import "./index.css";
import Phaser from "phaser";
import Image from "./assets/background.jpg";
import Heart from "./assets/heart.png";
import Start from "./assets/start -button.png";
import Restart from "./assets/restart.png";

class WinScene extends Phaser.Scene {
  restartButton!: Phaser.GameObjects.Sprite;

  constructor() {
    super("win-scene");
  }

  init(data: { score: number }) {
    const score = data.score;
    this.add.text(this.game.canvas.width/2, this.game.canvas.height/2-50, `Your score: ${score}`, { fontSize: '32px', color: '#fff' }).setOrigin(0.5);
  }

  preload() {
    this.load.image("restart", Restart);
  }

  create() {
    this.add
      .text(
        this.game.canvas.width / 2,
        this.game.canvas.height / 2,
        "Congratulations! You win!",
        { fontSize: "32px", color: "#fff" }
      )
      .setOrigin(0.5);
      this.restartButton = this.add
      .sprite(
        this.game.canvas.width / 2,
        this.game.canvas.height / 2 + 50,
        "restart"
      )
      .setInteractive()
      .setOrigin(0.5, 0.5)
      .setScale(0.2);
    this.restartButton.on("pointerdown", this.restart, this);
  }

  restart() {
    this.scene.start("scene-game");
  }
}

class LossScene extends Phaser.Scene {
    restartButton!: Phaser.GameObjects.Sprite;
  
    constructor() {
      super("loss-scene");
    }
  
    init(data: { score: number }) {
      const score = data.score;
      this.add.text(this.game.canvas.width/2, this.game.canvas.height/2-50, `Your score: ${score}`, { fontSize: '32px', color: '#fff' }).setOrigin(0.5);

    }

    preload() {
      this.load.image("restart", Restart);
    }
  
    create() {
      this.add
        .text(
          this.game.canvas.width / 2,
          this.game.canvas.height / 2,
          "Game over! You lose!",
          { fontSize: "32px", color: "#fff" }
        )
        .setOrigin(0.5);

        this.restartButton = this.add
      .sprite(
        this.game.canvas.width / 2,
        this.game.canvas.height / 2 + 50,
        "restart"
      )
      .setInteractive()
      .setOrigin(0.5, 0.5)
      .setScale(0.2);
    this.restartButton.on("pointerdown", this.restart, this);
  }

  restart() {
    this.scene.start("scene-game");
  }
}

class GameScene extends Phaser.Scene {
    words: Phaser.GameObjects.Text[];
    wordArray: string[];
    timer: number;
    timerText!: Phaser.GameObjects.Text;
    hearts: Phaser.GameObjects.Image[];
    playerLives: number;
    win: boolean;
    loss: boolean;
    startButton!: Phaser.GameObjects.Sprite;
    gameStarted: boolean;
    score: number;
    scoreText!: Phaser.GameObjects.Text;
    typedWord: string;
    attempts: number;
    writtenWordText!: Phaser.GameObjects.Text
    mistake:number

    constructor() {
        super("scene-game");
        this.words = [];
        this.wordArray = ["apple", "banana", "cherry", "orange", "grape"];
        this.timer = 60;
        this.playerLives = 3;
        this.hearts = [];
        this.win = false;
        this.loss = false;
        this.gameStarted = false;
        this.score = 100;
        this.typedWord = "";
        this.attempts = 0;
        this.mistake = 0;
      }

      preload() {
        this.load.image("bg", Image);
        this.load.image("heart", Heart);
        this.load.image("start", Start);
        this.load.spritesheet('explosion')
      }

      create() {
        this.add.image(0, 0, "bg").setOrigin(0, 0);
    
        Phaser.Utils.Array.Shuffle(this.wordArray);
    
        this.input.keyboard?.on("keydown", (event: KeyboardEvent) => {
          const character = event.key.toLowerCase();
          if (!(character === " ") && !(character === 'enter')) this.typedWord += character;
          else {
            this.typedWord = "";
            this.attempts++;
            this.updateScore();

            this.words.forEach((word) => {
                if (!(this.typedWord === word.text.toLowerCase())) {
                    this.mistake++
                }
              });
    
    
          }
        });
    
        this.scoreText = this.add
      .text(this.game.canvas.width - 150, 20, "", {
        fontFamily: "Minecraft",
        fontSize: "24px",
        color: "#fff",
      })
      .setOrigin(1, 0);

      this.timerText = this.add
      .text(this.game.canvas.width - 20, 20, "", {
        fontFamily: "Minecraft",
        fontSize: "24px",
        color: "#ffffff",
        align: "right",
      })
      .setOrigin(1, 0);

      this.writtenWordText = this.add
      .text(this.game.canvas.width/2, this.game.canvas.height-50, "", {
        fontFamily: "Minecraft",
        fontSize: "24px",
        color: "#ffffff",
        align: "right",
      })
      .setOrigin(1, 0);

      this.startButton = this.add
      .sprite(this.game.canvas.width / 2, this.game.canvas.height / 2, "start")
      .setInteractive()
      .setOrigin(0.5)
      .setScale(0.5);
    this.startButton.on("pointerdown", this.startGame, this);
  }

  startGame() {
    this.loss = true;
    this.playerLives = 3;
    this.gameStarted = false;
    this.timer = 60;
    this.attempts = 0;
    this.score = 100;

    if (!this.gameStarted) {
      this.gameStarted = true;

      this.initiateGameLogic();
    }
  }

  initiateGameLogic() {
    const wordDelay = 1000;
    let delay = 2500;

    const platform = this.physics.add
      .staticSprite(this.game.canvas.width / 2, this.game.canvas.height, "")
      .setSize(this.game.canvas.width, 1)
      .setVisible(false);

      for (let i = 0; i < this.playerLives; i++) {
        const heart = this.add.sprite(50 + i * 40, 30, "heart").setOrigin(0.5);
        heart.setScale(0.18);
        this.hearts.push(heart);
      }

      for (let i = 0; i < this.wordArray.length; i++) {
        this.time.delayedCall(delay, () => {
          const word = this.addFallingWord(this.wordArray[i]);
          this.physics.add.collider(word, platform, () => {
            this.wordReachedBottom(word);
          });
        });
        delay += wordDelay;
      }
