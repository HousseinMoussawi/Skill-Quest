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
