const date = document.querySelector(".date");

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();

date.textContent = ` ${day}.${month}.${year}.`;

var exampleModal = document.getElementById("exampleModal");
if (exampleModal) {
  exampleModal.addEventListener("show.bs.modal", function (event) {
    var img = event.relatedTarget;
    var numberOfImage = img.getAttribute("data-bs-whatever");

    var openImage = exampleModal.querySelector(".openImage");

    openImage.setAttribute("src", `gallery/${numberOfImage}.jpg`);
  });
}

const answer = 4;
const sendButton = document.querySelector(".submit-form");
const messageNumber = document.querySelector(".message-number");
const firstName = document.getElementById("validationCustom01");
const lastName = document.getElementById("validationCustom02");
const email = document.getElementById("exampleInputEmail1");
const message = document.getElementById("exampleFormControlTextarea1");
const guess = document.getElementById("guess");
const confirm = document.querySelector(".confirm");

if (sendButton) {
  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (guess.value !== answer) {
      messageNumber.textContent = "Netočan odgovor";
    }
    if (guess.value == answer) {
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      message.value = "";
      guess.value = "";
      messageNumber.textContent = "";
      confirm.textContent = "Poslano!";
    }
  });
}

const navbarToggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");

if (navbarToggler) {
  navbarToggler.addEventListener("click", function () {
    if (navbarToggler.classList.contains("nav-bg-color")) {
      navbarToggler.classList.remove("nav-bg-color");
    } else {
      navbar.classList.add("nav-bg-color");
    }
  });
}
