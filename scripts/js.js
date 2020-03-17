let progressBar = document.querySelectorAll("#progressbar > li");
let forms = document.querySelectorAll("fieldset");

let nextBtn = document.querySelectorAll(".next");
let previousBtn = document.querySelectorAll(".previous");
let submitBtn = document.querySelector(".submit");

function validateForm(page) {
  let validate = true;
  let data = document.querySelectorAll(
    `form fieldset:nth-of-type(${page + 1}) input:not([type='button'])`
  );

  for (let i = 0; i < data.length; i++) {
    if (String(data[i].value) == "") {
      alert("Todos os campos são obrigatorios.");
      validate = false;
      return validate;
    }
  }
  return validate;
}

function avancarPagina(page) {
  if (validateForm(page)) {
    forms[page].style.display = "none";
    progressBar[page].classList.remove("active");
    forms[page + 1].style.display = "block";
    progressBar[page + 1].classList.add("active");
  }
}
function voltarPagina(page) {
  forms[page].style.display = "none";
  progressBar[page].classList.remove("active");
  forms[page - 1].style.display = "block";
  progressBar[page - 1].classList.add("active");
}

for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", () => avancarPagina(i));
}
for (let i = 0; i < previousBtn.length; i++) {
  previousBtn[i].addEventListener("click", () => voltarPagina(i + 1));
}

/*
if (page == 0) {
  if (String(data[0].value).indexOf(" ") < 0 ) {
    alert("Email não pode conter espaços em branco.");
    validate = false;
    return validate;
  }
  if (String(data[1].value).indexOf(" ") < 0 ) {
    alert("Senha não pode conter espaços em branco.");
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
    validate = false;
    return validate;
  }
}
*/
