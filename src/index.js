import * as PIXI from 'pixi.js'
import { loadTextures } from './sprites';
import Snake from './snake';

const app = new PIXI.Application({
  width: 800, 
  height: 600, 
  backgroundColor: 0x1099bb, 
  resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

loadTextures();

const snake = new Snake({ app, PIXI });

app.ticker.add((delta) => {
  snake.update({ PIXI, delta });
});
