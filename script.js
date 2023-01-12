const albumNumbers = function () {
  let albumNodes = document.querySelectorAll(".album");
  document.querySelector(
    ".albums-number"
  ).innerHTML = `Number of albums: ${albumNodes.length}`;
};

const deleteTrack = function () {
  let buttonNodes = document.querySelectorAll("#tracklist button.btn-danger");
  for (let button of buttonNodes) {
    button.addEventListener("click", function (eventData) {
      eventData.target.parentElement.parentElement.parentElement.removeChild(
        eventData.target.parentElement.parentElement
      );
    });
  }
};

const addTrack = function () {
  let newTrack = document.createElement("tr");
  newTrack.innerHTML = `
  <th scope="row">${document.querySelector("#number").value}</th>
  <td>${document.querySelector("#title").value}</td>
  <td>${document.querySelector("#artist").value}</td>
  <td>${document.querySelector("#duration").value}</td>
  <td><button onclick="deleteTrack()" class="btn btn-danger">Delete</button></td>`;

  document.querySelector("#tracklist tbody").appendChild(newTrack);
};

document
  .querySelector(".modal-footer button:last-child")
  .addEventListener("click", addTrack);

window.onload = albumNumbers;
window.onload = deleteTrack;
