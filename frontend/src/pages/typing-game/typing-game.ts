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