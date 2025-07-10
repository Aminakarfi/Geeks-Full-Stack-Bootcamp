function myMove() {
  const elem = document.getElementById("animate");
  let pos = 0;
  const containerWidth = 400;
  const boxWidth = 50;
  const maxPos = containerWidth - boxWidth;

  const interval = setInterval(() => {
    if (pos >= maxPos) {
      clearInterval(interval);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }, 1);
}
