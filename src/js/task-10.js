function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  const baseSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = baseSize + i * 10 + "px";
    box.style.height = baseSize + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);
