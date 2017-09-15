function updown() {
  if (getColor() == "blue") {
    down();
    down();
    down();
  }
  else
    if (getColor() != "blue") {
      up();
      up();
      up();
    }
}
function downup() {
  if (getColor() == "blue") {
    right();
    down();
    up();
  }
  else
    if (getColor() != "blue") {
      left();
      up();
      down();
    }
}
right();
updown();
downup();
