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
    const detailColumns = document.querySelectorAll(".detail-column");
    detailColumns.forEach((column, index) => {
      setTimeout(function () {
        column.classList.add("show");
      }, 300 * index);
    });
    const dateColumns = document.querySelectorAll(".date-column");
    dateColumns.forEach((column, index) => {
      setTimeout(function () {
        column.classList.add("show");
      }, 300 * index);
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  const text = "SERGIO PÉREZ VICENTE";
  let index = 0;
  const speed = 250;
  const typedTextElement = document.getElementById("typed-text");

  function typeWriter() {
    if (index < text.length) {
      typedTextElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
