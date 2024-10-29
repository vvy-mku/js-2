// Весь код буде виконуватись тільки тоді коли документ повністю завантажений
// Таким чином усі html елементи будуть створені і JS код метеме до них доступ без помилок
window.addEventListener("load", function () {
  console.log("Весь документ завантажено");
  const passwordInput = document.getElementById("password");

  const invalidPassowrd = document.getElementById("invalidPassword");

  submitFunction = function () {
    if (passwordInput.value == "my_password") {
      console.log("Вхід виконано");
      invalidPassowrd.style.display = "none";
    } else {
      invalidPassowrd.style.display = "block";
    }
  };

  const submitButton = document.getElementById("submitButton");

  const invalidEmail = document.getElementById("invalidEmail");

  const emailInput = document.getElementById("email");
  emailInput.addEventListener("keyup", function () {
    if (emailInput.value == "alex@gmail.com") {
      // Перевіряти чи є зареєстрований користувач з вказаним email
      invalidEmail.style.display = "none";
      submitButton.addEventListener("click", submitFunction);
    } else {
      invalidEmail.style.display = "block";
      submitButton.removeEventListener("click", submitFunction);
    }
  });

  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", function () {
    emailInput.value = "";
    passwordInput.value = "";
  });

  const plus = this.document.getElementById("plus");
  const minus = this.document.getElementById("minus");
  let result = 0;
  plus.addEventListener("click", function () {
    result = result + 1;
    console.log(result);
  });
  minus.addEventListener("click", function () {
    result = result - 1;
    console.log(result);
  });
});
