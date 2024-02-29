var isPlaying = false;

function changePlayButton() {
  isPlaying = !isPlaying;
  const playImg = document.getElementById("play-img");
  playImg.src = isPlaying ? "pause-button.png" : "play-button.png";

  const element = document.getElementById("progress-preview-id");
  if (isPlaying) {
    element.classList.add("extend-max-width");
  } else {
    element.classList.remove("extend-max-width");
  }
}