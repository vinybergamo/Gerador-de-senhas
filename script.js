const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector("label[for='inputLengthId']");
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLower");
const chkUpper = document.querySelector("#chkUpper");
const chkNumber = document.querySelector("#chkNumber");
const chkSymbols = document.querySelector("#chkSymbols");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseCaracters = caracters.map((item) => String.fromCharCode(item));
const upperCaseCaracters = lowerCaseCaracters.map((item) =>
  item.toLocaleUpperCase()
);

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
  infoLength.innerHTML = lenInput.value;
});

btnGerar.addEventListener("click", () => {
  generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
  );
});

const generatePassword = (
  hasNumber,
  hasSymbols,
  HasLowercase,
  hasUppercase,
  lenght
) => {
  const newArray = [
    ...(hasNumber ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(HasLowercase ? lowerCaseCaracters : []),
    ...(hasUppercase ? upperCaseCaracters : []),
  ];

    if (newArray.length === 0) return;

    let password = ""
    
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length)
        password += newArray[randomIndex]
    }

    passInput.value = password
};
