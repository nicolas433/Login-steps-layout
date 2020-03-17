let progressBar = document.querySelectorAll("#progressbar > li");
let forms = document.querySelectorAll("fieldset");

let nextBtn = document.querySelectorAll(".action-button");

function validateForm(page) {
  let validate = true;
  let data = document.querySelectorAll(
    `form fieldset:nth-of-type(${page + 1}) input:not([type='button'])`
  );
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    if (String(data[i].value) == "") {
      alert("Todos os campos são obrigatorios.");
      validate = false;
      return validate;
    }
  }
  
  if (page == 0) {
    if (String(data[0].value).length < 8) {
      alert("Senha muito pequena.");
      validate = false;
      return validate;
    }

    if (String(data[1].value) != String(data[2].value)) {
      alert("Senhas diferentes.");
      validate = false;
      return validate;
    }
    if (String(data[1].value).length < 8) {
      alert("Senha muito pequena.");
      return validate;
    }
  }
  return validate;
}

function trocarDePagina(i, e) {
  if (validateForm(i)) {
    forms[i].style.display = "none";
    progressBar[i].classList.remove("active");
    forms[i + 1].style.display = "block";
    progressBar[i + 1].classList.add("active");
  }
  e.preventDefault();
}

for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", () => trocarDePagina(i));
}
