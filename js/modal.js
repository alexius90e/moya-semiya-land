document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeBtn = document.querySelector(".close");

  const videoIds = [
    "bae8d3c78531987037b6957f9d061a5c",
    "bae8d3c78531987037b6957f9d061a5c",
    "bae8d3c78531987037b6957f9d061a5c",
    "bae8d3c78531987037b6957f9d061a5c",
  ];

  document
    .querySelectorAll(".watch__play, .watch__bottom")
    .forEach((playBtn, index) => {
      playBtn.addEventListener("click", function (e) {
        e.preventDefault();
        openVideoModal(videoIds[index]);
      });
    });

  closeBtn.addEventListener("click", closeVideoModal);

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeVideoModal();
    }
  });

  function openVideoModal(videoId) {
    videoPlayer.src = `https://rutube.ru/play/embed/${videoId}/`;
    modal.style.display = "flex";
  }

  function closeVideoModal() {
    modal.style.display = "none";
    videoPlayer.src = "";
  }
});
