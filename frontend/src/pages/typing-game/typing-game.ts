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
    this.add
      .text(
        this.game.canvas.width / 2,
        this.game.canvas.height / 2 - 50,
        `Your score: ${score}`,
        { fontSize: "32px", color: "#fff" }
      )
      .setOrigin(0.5);
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
    this.add
      .text(
        this.game.canvas.width / 2,
        this.game.canvas.height / 2 - 50,
        `Your score: ${score}`,
        { fontSize: "32px", color: "#fff" }
      )
      .setOrigin(0.5);
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
  writtenWordText!: Phaser.GameObjects.Text;
  mistake: number;

  constructor() {
    super("scene-game");
    this.words = [];
    this.wordArray = ["apple", "banana", "cherry", "orange", "grape","kiwi",
    "mango",
    "strawberry",
    "blueberry",
    "pineapple",
    "watermelon",
    "peach",
    "pear",
    "plum",
    "lemon",
    "lime",
    "raspberry",
    "blackberry",
    "coconut",
    "papaya"];
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
    this.load.spritesheet("explosion");
  }

  create() {
    this.add.image(0, 0, "bg").setOrigin(0, 0);

    Phaser.Utils.Array.Shuffle(this.wordArray);

    this.input.keyboard?.on("keydown", (event: KeyboardEvent) => {
      const character = event.key.toLowerCase();
      if (!(character === " ") && !(character === "enter"))
        this.typedWord += character;
      else {
        this.typedWord = "";
        this.attempts++;
        this.updateScore();
        
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
      .text(this.game.canvas.width / 2, this.game.canvas.height - 50, "", {
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

    this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true,
    });

    this.startButton.destroy();
  }

  wordReachedBottom(word: Phaser.GameObjects.Text) {
    word.destroy();
    this.score -=10
    this.updateScore()
    if (this.playerLives > 0) {
      this.playerLives--;
      this.hearts[this.playerLives].destroy();
    } 
  }
  update() {
    this.words.forEach((word) => {
      if (this.typedWord === word.text.toLowerCase()) {
        word.destroy();
      }

      this.writtenWordText.setText(`${this.typedWord}`);
    });
  }

  addFallingWord(wordText: string) {
    const word = this.add
      .text(Phaser.Math.Between(100, 800), 0, wordText, {
        fontFamily: "Minecraft",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0.5, 0);

    this.physics.add.existing(word);
    const body = word.body as Phaser.Physics.Arcade.Body;
    body.setGravityY(50);
    this.words.push(word);

    return word;
  }

  updateTimer() {
    if (this.gameStarted && !(this.playerLives === 0)) {
      this.timer--;
      this.timerText.setText(`Time: ${this.timer}s`);
    
       if (this.timer <= 0) {
        this.timer = 0;
        this.loadWinScene();
      }
    }
    else {
      this.loadLossScene()
    }
  }

  updateScore() {
    this.scoreText.setText(`Score: ${Math.round(this.score)}`);
  }

  endGame() {
      this.loss = true;
      this.loadLossScene();
  }

  loadWinScene() {
    this.scene.start("win-scene", { score: this.score });
  }

  loadLossScene() {
    this.score = 0;
    this.scene.start("loss-scene", { score: this.score });
  }
}

const config = {
  type: Phaser.WEBGL,
  width: "100%",
  height: "100%",
  parent: "canvas",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [GameScene, WinScene, LossScene],
};

export default config;
