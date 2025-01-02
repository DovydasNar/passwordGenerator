import {
  passwordLengthInput,
  uppercaseCheckbox,
  numbersCheckbox,
  symbolsCheckbox,
  generateButton,
  copyButton,
  passwordOutput,
} from "/domElements.js";

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);

function generatePassword() {
  const length = +passwordLengthInput.value;
  const hasUppercase = uppercaseCheckbox.checked;
  const hasNumbers = numbersCheckbox.checked;
  const hasSymbols = symbolsCheckbox.checked;

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";

  let characters = lowercase;
  if (hasUppercase) characters += uppercase;
  if (hasNumbers) characters += numbers;
  if (hasSymbols) characters += symbols;

  if (characters === lowercase && !hasNumbers && !hasSymbols) {
    alert("Please select at least one option.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordOutput.textContent = password;
}

function copyPassword() {
  const password = passwordOutput.textContent;
  if (!password) {
    alert("There is no password to copy.");
    return;
  }

  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied to clipboard.");
    })
    .catch((error) => {
      console.error("Failed to copy: ", error);
    });
}
