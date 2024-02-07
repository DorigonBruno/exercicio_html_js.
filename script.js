const campo1 = document.querySelector("#campoa");
const campo2 = document.querySelector("#campob");
const messageError = document.querySelector(".message-error");
const messageSucess = document.querySelector(".sucess-message");
const form = document.querySelector("form");

function preventSubmit(event) {
  event.preventDefault();
  maiorQue();
}

function maiorQue() {
  const campoA = campo1.value;
  const campoB = campo2.value;

  if (campoB > campoA) {
    messageSucess.textContent = `Sucesso ${campoB} é maior que ${campoA}`;
    setTimeout(() => {
      messageSucess.textContent = "";
    }, 4000);
  } else {
    messageError.textContent = `Perai ${campoB} é menor que ${campoA} então falhou !`;
    setTimeout(() => {
      messageError.textContent = "";
    }, 4000);
  }
}

form.addEventListener("submit", preventSubmit);
