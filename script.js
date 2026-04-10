const form = document.querySelector(".container");
const inputs = document.querySelectorAll("input, textarea");
const errors = document.querySelectorAll(".text-error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  errors.forEach(function (errorP) {
    errorP.style.display = "flex";
  });

  inputs.forEach(function (input) {
    if (input.type !== "radio" && input.type !== "checkbox") {
      input.style.border = "1px solid var(--red)";
    }
  });

  form.classList.add("border-error");
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const errorP = input.nextElementSibling;

    if (input.value.trim() !== "") {
      // Ẩn thông báo lỗi đi
      if (errorP && errorP.classList.contains("text-error")) {
        errorP.style.display = "none";
      }

      input.style.border = "1px solid var(--grey-500)";
    }
  });
});

const radios = document.querySelectorAll("input[name='radio']");
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const radioError = document.querySelector(".card-radio").nextElementSibling;
    if (radioError) {
      radioError.style.display = "none";
    }
  });
});

const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
  const checkboxError = checkbox.parentElement.nextElementSibling;
  if (checkbox.checked && checkboxError) {
    checkboxError.style.display = "none";
  }
});
