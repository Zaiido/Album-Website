const albumNumbers = function () {
  let albumNodes = document.querySelectorAll(".album");
  document.querySelector(
    ".albums-number"
  ).innerHTML = `Number of albums: ${albumNodes.length}`;
};

window.onload = albumNumbers;
