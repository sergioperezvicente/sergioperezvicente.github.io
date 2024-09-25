window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(function () {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
    }, 1000);
  }, 1500);
});
document.addEventListener("DOMContentLoaded", function () {
  const animateColumns = (selector) => {
    const columns = document.querySelectorAll(selector);
    columns.forEach((column, index) => {
      setTimeout(() => column.classList.add("show"), 300 * index);
    });
  };
  animateColumns(".detail-column");
  animateColumns(".date-column");
  const text = "SERGIO PÉREZ VICENTE";
  let index = 0;
  const speed = 250;
  const typedTextElement = document.getElementById("typed-text");
  const typeWriter = () => {
    if (index < text.length) {
      typedTextElement.textContent += text.charAt(index++);
      setTimeout(typeWriter, speed);
    }
  };
  typeWriter();
});
