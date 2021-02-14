const gridContent = document.querySelector("#g-container");
const resetButton = document.querySelector("#r-button");

let size = 16;
let gridBoxes;

function createGrid(size) {
    gridContent.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContent.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < number * number; i++) {
        let gridElement = document.createElement("div");
        gridElement.classList.add("gridBox");
        gridContent.appendChild(gridElement);
    }

    const gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", (e) => {
            gridBox.classList.add("active");
        });
    });
}

resetButton.addEventListener("click", (e) => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
});


