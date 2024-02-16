document.getElementById("btn").addEventListener("click", clickButton);

function clickButton() {
  const random = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + random.toString(16);
  document.body.style.backgroundColor = randomCode;
  const colorcode = document.getElementById("color-code");
  colorcode.innerText = randomCode;
  navigator.clipboard.writeText(randomCode);
}
clickButton();
