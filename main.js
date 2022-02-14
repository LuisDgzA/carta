function createHeart() {
  const heartRain = document.createElement("div");
  heartRain.classList.add("heartRain");
  heartRain.innerHTML = "&#128151;";
  heartRain.style.left = Math.random() * 100 + "vw";
  heartRain.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(heartRain);

  setTimeout(() => {
    heartRain.remove();
  }, 5000);
}

setInterval(createHeart, 400);
