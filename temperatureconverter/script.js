const celsiusTab = document.querySelector("#celsius-tab");
const fahrenheitTab = document.querySelector("#fahrenheit-tab");
const kelvinTab = document.querySelector("#kelvin-tab");
const inputValue = document.querySelector("#input-value");
const inputUnit = document.querySelector("#input-unit");
const outputValue = document.querySelector("#output-value");
const outputUnit = document.querySelector("#output-unit");
const convertButton = document.querySelector("#convert-button");

celsiusTab.addEventListener("click", () => {
  inputUnit.value = "celsius";
  outputUnit.value = "fahrenheit";
});

fahrenheitTab.addEventListener("click", () => {
  inputUnit.value = "fahrenheit";
  outputUnit.value = "celsius";
});

kelvinTab.addEventListener("click", () => {
  inputUnit.value = "kelvin";
  outputUnit.value = "celsius";
});

convertButton.addEventListener("click", () => {
  let result;
  if (inputUnit.value === "celsius" && outputUnit.value === "fahrenheit") {
    result = (inputValue.value * 9/5) + 32;
  } else if (inputUnit.value === "fahrenheit" && outputUnit.value === "celsius") {
    result = (inputValue.value - 32) * 5/9;
  } else if (inputUnit.value === "kelvin" && outputUnit.value === "celsius") {
    result = inputValue.value - 273.15;
  } else if (inputUnit.value === "celsius" && outputUnit.value === "kelvin") {
    result = inputValue.value + 273.15;
  } else if (inputUnit.value === "fahrenheit" && outputUnit.value === "kelvin") {
    result = (inputValue.value + 459.67) * 5/9;
  } else if (inputUnit.value === "kelvin" && outputUnit.value === "fahrenheit") {
    result = (inputValue.value * 9/5) - 459.67;
  }
  outputValue.value = result.toFixed(2);
});
