const button = document.querySelector("#button");
const div = document.querySelector("#container");

let num = 4;

button.addEventListener("click", () => {
    let x = parseInt(prompt("enter grid number", 16)); 

})

for (let i = 0; i < num; i++) {
    const square = document.createElement("div"); 
    square.style.margin = "0";
    div.appendChild(square);

    for (let j = 0; j < num; j++) {
        const row = document.createElement("div");
        row.style.height = "10px";
        row.style.width = "10px";
        row.style.border = "1px solid black";
        row.className = "rows";
        row.style.margin = "0";
        square.appendChild(row);
    }
}





