function shopNow() {
  let name = prompt("Please fill in your name");
  let email = prompt("Please fill in your email");

  alert("Thank you" + " " + name + " " + ",We will keep in touch!😊");
}
let shopNowButton = document.querySelector("button");
shopNowButton.addEventListener("click", shopNow);
