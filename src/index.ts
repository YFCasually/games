import * as scenes from '@/scenes'

const scene = []
for (let i in scenes) {
  scene.push(scenes[i])
}

const config: any = {
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'app',
    width: 750,
    height: 1334
  },
  scene
}

window.game = new Phaser.Game(config)
