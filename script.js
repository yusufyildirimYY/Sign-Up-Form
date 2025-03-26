const passwordInput = document.querySelector("#Password");
const characterReq = document.querySelector("#characterReq");
const lowerCaseReq = document.querySelector("#lowerCaseReq");
const upperCaseReq = document.querySelector("#upperCaseReq");

passwordInput.addEventListener("keyup", (e) => {
  if (passwordInput.value.length >= 8) {
    characterReq.style.color = "rgba(0, 255, 4, 0.604)";
  } else {
    characterReq.style.color = "rgb(255, 51, 51)";
  }

  if (/[a-z]/.test(passwordInput.value)) {
    lowerCaseReq.style.color = "rgba(0, 255, 4, 0.604)";
  } else {
    lowerCaseReq.style.color = "rgb(255, 51, 51)";
  }

  if (/[A-Z]/.test(passwordInput.value)) {
    upperCaseReq.style.color = "rgba(0, 255, 4, 0.604)";
  } else {
    upperCaseReq.style.color = "rgb(255, 51, 51)";
  }
});
