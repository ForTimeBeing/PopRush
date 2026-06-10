import Phaser from 'phaser';
import './style.css';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#111827');

    this.add
      .text(20, 20, 'Hello from Phaser 3 + Vite', {
        fontFamily: 'Arial, sans-serif',
        fontSize: '28px',
        color: '#f9fafb'
      })
      .setShadow(1, 1, '#000000', 2, true, true);

    const movingCircle = this.add.circle(90, 200, 28, 0x34d399);

    this.tweens.add({
      targets: movingCircle,
      x: 710,
      duration: 1800,
      ease: 'Sine.InOut',
      yoyo: true,
      repeat: -1
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 800,
  height: 450,
  scene: [MainScene]
};

new Phaser.Game(config);
