
const urlInput = document.querySelector("#sitio");
const qrButton = document.querySelector("#qrButton");
const qrContainer = document.querySelector("#qrContainer");
const qr = document.querySelector("#qr");
const warning = document.querySelector("#warning");

function isUrlValid(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return pattern.test(str);
}

function generaQR(event) {
  event.preventDefault();
  if (isUrlValid(urlInput.value)) {
    qr.innerHTML = "";
    warning.innerHTML = "";
    new QRCode(qr, urlInput.value);
    qrContainer.classList.add("d-flex", "justify-content-center");
  } else {
    warning.innerHTML = "Coloca una url valida";
  }
}
//funcion para limpiar los campos
function clearFields() {
  urlInput.value = "";
  warning.innerHTML = "";
  qr.innerHTML = "";
}
qrButton.addEventListener("click", generaQR);
urlInput.addEventListener("focus", clearFields);