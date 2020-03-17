let progressBar = document.querySelectorAll("#progressbar > li");
let forms = document.querySelectorAll("fieldset");

let formControl = 0;

let dataForm1 = document.querySelectorAll(
  "form fieldset:nth-of-type(1) input:not([type='button'])"
);
let dataForm2 = document.querySelectorAll(
  "form fieldset:nth-of-type(2) input:not([type='button']"
);
let dataForm3 = document.querySelectorAll(
  "form fieldset:nth-of-type(3) input:not([type='button']"
);
let data = [dataForm1, dataForm2, dataForm3];

console.log(data);

function validate(elements) {
  dataForm1 = document.querySelectorAll(
    "form fieldset:nth-of-type(1) input:not([type='button'])"
  );
  dataForm2 = document.querySelectorAll(
    "form fieldset:nth-of-type(2) input:not([type='button']"
  );
  dataForm3 = document.querySelectorAll(
    "form fieldset:nth-of-type(3) input:not([type='button']"
  );

  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
      console.log(elements[i].value)
    if (elements[i].value == "") {
      return false;
    }
  }
}

function npForm(a) {
  if (!validate(data[formControl])) {
    forms[formControl].style.display = "none";
    progressBar[formControl].classList.remove("active");
    formControl = formControl + a;
    forms[formControl].style.display = "block";
    progressBar[formControl].classList.add("active");
  } else {
    alert("Preencha todos os campos.");
  }
}

let nextBtn = document.querySelectorAll(".action-button");
let previusBtn = document.querySelectorAll(".previus");

for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", () => npForm(1));
}

for (let i = 0; i < previusBtn.length; i++) {
  previusBtn[i].addEventListener("click", () => npForm(-1));
}
