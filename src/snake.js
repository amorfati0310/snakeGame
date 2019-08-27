import { createPiece, updatePiece } from './sprites';

const STEP_TIME = 20;
const MAX_LENGTH = 3;

export default class Snake {
  constructor({ app, PIXI }) {
    this.pieces = [];

    this.position = {
      x: 0,
      y: 0,
    }

    this.velocity = {
      x: 0,
      y: 1,
    };

    this.elapsedTime = 0;

    this.container = new PIXI.Container();
    app.stage.addChild(this.container);

    this.addPiece({ PIXI });
  }

  update({ PIXI, delta }) {
    this.elapsedTime += delta;

    if (this.elapsedTime < STEP_TIME) {
      return;
    }

    if (this.pieces.length < MAX_LENGTH) {
      this.addPiece({ PIXI });
    }

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.updatePieces();

    this.elapsedTime -= STEP_TIME;
  }

  addPiece({ PIXI }) {
    const tail = this.pieces[this.pieces.length - 1] || this;
    const { x, y } =  tail.position;
    const piece = new SnakePiece({ PIXI, x, y });

    this.pieces.push(piece);
    this.container.addChild(piece.sprite);
  }

  updatePieces() {
    this.pieces.reduce((acc, cur) => cur.update(acc), this.position);
  }
};

class SnakePiece {
  constructor({ PIXI, x, y }) {
    this.position = { x, y };

    this.sprite = createPiece({ PIXI, x, y });
  }

  update({ x, y }) {
    const position = this.position;

    this.position = { x, y };
    updatePiece(this.sprite, { x, y })

    return position;
  }
}
