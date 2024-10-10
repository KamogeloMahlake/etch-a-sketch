const h1 = document.createElement("h1");
const container = document.querySelector("#container");
const button = document.createElement("button");

let sideSize = 16;
createGrid(sideSize);

h1.textContent = "Etch-a-Sketch"
button.textContent = "CREATE NEW GRID";
container.before(h1);
container.before(button);

button.addEventListener("click", () => {
    sideSize = prompt("ENTER NEW SIDE SIZE(MAX 100)", sideSize);
    container.innerHTML = ""
    if (sideSize > 100) {
        createGrid(100);
    } else if (sideSize < 1) {
        createGrid(1);
    } else {
        createGrid(sideSize);
    }
});

function createGrid(sideSize) {
    for (let i = 0; i < sideSize; i++) {
        const div = document.createElement("div");
        container.appendChild(div);

        for (let j = 0; j < sideSize; j++) {
            const box = document.createElement("div");
            box.style.width = `calc(560px / ${sideSize})`;
            box.style.height = `calc(560px / ${sideSize})`;
            box.className = "boxes";
            div.appendChild(box);
        }
    }
    function colors() {
        let values = "0123456789abcdef";
        color = "#";

        for (let i = 0; i < 6; i++) {
            color += values[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let boxes = document.querySelectorAll(".boxes");
    boxes.forEach((div) => {
        div.addEventListener("mouseover", () => {            
            div.style.backgroundColor = colors();
        })
    }
    )
}




