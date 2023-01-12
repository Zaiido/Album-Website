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
  let trackNumber = document.querySelector("#number").value;
  let trackTitle = document.querySelector("#title").value;
  let trackArtist = document.querySelector("#artist").value;
  let trackDuration = document.querySelector("#duration").value;
  if (
    trackNumber !== "" &&
    trackTitle !== "" &&
    trackArtist !== "" &&
    trackDuration !== ""
  ) {
    newTrack.innerHTML = `
  <th scope="row">${trackNumber}</th>
  <td>${trackTitle}</td>
  <td>${trackArtist}</td>
  <td>${trackDuration}</td>
  <td><button onclick="deleteTrack()" class="btn btn-danger">Delete</button></td>`;

    document.querySelector("#tracklist tbody").appendChild(newTrack);
    document
      .querySelector(".modal-footer button:last-child")
      .setAttribute("data-dismiss", "modal");
    setTimeout(function () {
      alert(`Track added: ${document.querySelector("#title").value}`);
    }, 700);
  } else {
    alert("The fields should not be empty.");
  }
};

document
  .querySelector(".modal-footer button:last-child")
  .addEventListener("click", addTrack);

window.onload = albumNumbers;
window.onload = deleteTrack;
