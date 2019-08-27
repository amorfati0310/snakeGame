import * as PIXI from 'pixi.js'

const TILE_SIZE = 32;

const textures = {};

export const loadTextures = () => {
  textures.snake = PIXI.Texture.from('assets/snake.png');
};

export const createPiece = ({ PIXI, x, y }) => {
  const texture = textures.snake;
  const piece = new PIXI.Sprite(texture);
  piece.width = TILE_SIZE;
  piece.height = TILE_SIZE;
  piece.x = x * TILE_SIZE;
  piece.y = y * TILE_SIZE;
  return piece;
}

export const updatePiece = (sprite, {x, y }) => {
  sprite.x = x * TILE_SIZE;
  sprite.y = y * TILE_SIZE;
}
