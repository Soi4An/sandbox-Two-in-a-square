import { moveDown, moveLeft, moveRight, moveUp } from "./moves";

let xDown = null;
let yDown = null;

function getTouches(event) {
  return event.touches ||         // browser API
    event.originalEvent.touches;  // jQuery
}

export function handleTouchStart(event) {
  const firstTouch = getTouches(event)[0];

  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};

export function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = event.touches[0].clientX;
  let yUp = event.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      moveRight();
    } else {
      moveLeft();
    }
  } else {
    if (yDiff > 0) {
      moveDown();
    } else {
      moveUp();
    }
  }

  xDown = null;
  yDown = null;
};
