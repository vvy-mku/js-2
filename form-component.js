function createFormComponent() {
  // Форма з двома input-ами: Логін та пароль і кнопкою "Вхід"
  const formDiv = document.createElement("div");

  const loginDiv = document.createElement("div"); // <div></div>
  const loginP = document.createElement("p"); // <p></p>
  const loginText = document.createTextNode("Логін:"); // "Логін:"
  loginP.appendChild(loginText); // <p>Логін:</p>
  loginDiv.appendChild(loginP); // <div><p>Логін:</p></div>

  const loginInput = document.createElement("input"); // <input/>
  loginDiv.appendChild(loginInput); //<div><p>Логін:</p><input/></div>

  formDiv.appendChild(loginDiv);

  const passwordDiv = document.createElement("div"); // <div></div>
  const passwordP = document.createElement("p"); //<p></p>
  const passeordText = document.createTextNode("Пароль:"); // "Пароль:"
  passwordP.appendChild(passeordText); // <p>Пароль:</p>

  const passwordInput = document.createElement("input"); // "input"
  passwordDiv.appendChild(passwordP); // <div><p>Пароль:</p> </div>
  passwordDiv.appendChild(passwordInput); // <div><p>Пароль:</p><input/></div>

  formDiv.appendChild(passwordDiv);

  const enterButton = document.createElement("button");
  enterButton.addEventListener("click", function () {
    console.log('Кнопка "Вхід" натиснена');
    loginInput.value = "edede";
  });

  const enterText = document.createTextNode("Вхід");
  enterButton.appendChild(enterText);

  formDiv.appendChild(enterButton);

  return formDiv;
}

window.addEventListener("load", function () {
  //   console.log("Init code");
  //   const nameDiv = document.createElement("div"); // <div></div<
  //   const nameText = document.createTextNode("My name"); // "My text"

  //   nameDiv.appendChild(nameText); // <div>My text</div>

  const rootDiv = document.getElementById("root"); // Існуючий <div id="root"></div>

  const formComponent = createFormComponent();
  const formComponent1 = createFormComponent();
  rootDiv.appendChild(formComponent);
  rootDiv.appendChild(formComponent1);
});
