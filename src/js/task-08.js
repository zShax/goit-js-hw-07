const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields.");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);

    emailInput.value = "";
    passwordInput.value = "";
  }
});
