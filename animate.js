function runAnimation() {
  window.requestAnimationFrame(function () {

  // Configuration (you can change these)
  let startValue = 78;
  let endValue = 65;
  let duration = 1000;   // in ms (1 seconds)
  let delay = 0000;      // in ms (0 seconds)
  let fontSize = "110px"; // font size

  const circle = document.getElementById("counterCircle");
  const textUp = document.getElementById("textUp");
  const textDown = document.getElementById("textDown");
  circle.style.setProperty("--font-size", fontSize);
  circle.style.setProperty("--duration", duration + "ms");

  // Counter animation
  function animateCounter() {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = (timestamp - startTime) / duration;
      if (progress > 1) progress = 1;

      // Calculate current value
      let currentValue = Math.round(startValue - (startValue - endValue) * progress);
      circle.textContent = currentValue;

      // On first step, trigger color/background transition
      if (progress === 0) {
        circle.style.backgroundColor = "white";
        circle.style.color = "black";
        textUp.style.color = "black";
        textDown.style.color = "black";
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }

  // Start after delay
  setTimeout(animateCounter, delay);

  });
}



  