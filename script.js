document.body.style.backgroundColor = "#000000";
document.body.style.color = "#ffffff";

const start = document.querySelector("#main_structure");
start.append();

const first_header = document.createElement("h2");
first_header.textContent = "The Etch a Sketch";
first_header.style.fontFamily = "Courier New, Courier, monospace";
first_header.style.fontSize = "300%";
first_header.style.textAlign = "center";
first_header.style.textShadow = "2px 2px #0000ff";
start.appendChild(first_header);

const button = document.createElement("button");
start.appendChild(button);
button.setAttribute("id", "button_name");
document.getElementById("button_name").innerHTML = "Change Size";
button.style.fontFamily = "Verdana";
button.style.fontSize = "100%";

const grid_container = document.createElement("div");
grid_container.classList = "grid";
start.appendChild(grid_container);

window.addEventListener("load", setDefaultGrid);

function setDefaultGrid() {
    setGridSize(12);
    fillGrid(12);
}

function setGridSize(size) {
    grid_container.style.gridTemplateColumns = "repeat(${size}, 1fr)";
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const grid_element = document.createElement("div");
        grid_element.classList = "grid_properties";
        start.appendChild(grid_element);
    }
}



