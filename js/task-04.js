let counterValue = 0;
const valueElement = document.getElementById("value");

document
  .querySelector("[data-action='decrement']")
  .addEventListener("click", () => {
    counterValue -= 1;
    updateCounterValue();
  });

document
  .querySelector("[data-action='increment']")
  .addEventListener("click", () => {
    counterValue += 1;
    updateCounterValue();
  });

function updateCounterValue() {
  valueElement.textContent = counterValue;
}
