const date = document.querySelector(".date");

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();

date.textContent = ` ${day}.${month}.${year}.`;

var exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  var img = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var numberOfImage = img.getAttribute("data-bs-whatever");

  var openImage = exampleModal.querySelector(".openImage");
  //
  openImage.setAttribute("src", `gallery/${numberOfImage}.jpg`);
});
