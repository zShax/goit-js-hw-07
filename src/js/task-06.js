const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const dataLength = validationInput.getAttribute("data-length");

  if (inputValue.length === Number(dataLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
