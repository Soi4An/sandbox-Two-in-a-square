import { afterMove, resetBeforeMove } from "./beforeAfterMove";
import { checkLose } from "./checkLose";
import { makeMoveBy } from "./makeMoveBy";

export function moveLeft() {
  resetBeforeMove();
  makeMoveBy(true, true);
  afterMove();
  checkLose();
};

export function moveRight() {
  resetBeforeMove();
  makeMoveBy(true, false);
  afterMove();
  checkLose();
};

export function moveDown() {
  resetBeforeMove();
  makeMoveBy(false, false);
  afterMove();
  checkLose();
};

export function moveUp() {
  resetBeforeMove();
  makeMoveBy(false, true);
  afterMove();
  checkLose();
};
