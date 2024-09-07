const table = document.querySelector(".table");
const planner = document.querySelector(".planner");
const btnErase = document.querySelector(".btn-erase");

const getLocalStorage = (id) => localStorage.getItem(id) ?? [];
const setLocalStorage = (id, value) => localStorage.setItem(id, value);

let id = 0;
let tableTitles = ["seg", "ter", "qua", "qui", "sex", "sab", "dom", "anotações"];

for (let title of tableTitles) {
    createCol(title)

}

function createCol(name) {
    let column = document.createElement("div")
    let h3 = document.createElement("h3")
    let line = document.createElement("div")

    column.setAttribute("class", `column ${name}`)
    h3.innerHTML = name
    line.setAttribute("class", "line")


    for (let i = 0; i < 9; i++) {
        let input = document.createElement("input")
        input.type = "text"
        input.setAttribute("class", "input-planner")
        line.appendChild(input)
    }
    column.appendChild(h3)
    column.appendChild(line)

    table.appendChild(column)
}
let allInputs = document.querySelectorAll(".input-planner")

for (let i = 0; i < 71; i++) {
    allInputs[i].setAttribute("id", `${i}`)
}

let notes = document.querySelector(".anotações")
let inpNotes = document.querySelectorAll(".anotações input")


btnErase.onclick = () => {
    allInputs.forEach(ip => {
        ip.value = ""
        setLocalStorage(ip.id, ip.value)
    })
}

function saveDados() {
    allInputs.forEach((ip) => {
        ip.onblur = () => {
            getLocalStorage(ip.id);
            setLocalStorage(ip.id, ip.value);
        }
        ip.value = localStorage.getItem(ip.id)
    })
}

saveDados();

