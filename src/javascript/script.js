const table = document.querySelector(".table");
const planner = document.querySelector(".planner");
const btnErase = document.querySelector(".btn-erase");

const getLocalStorage = (id) => localStorage.getItem(id) ?? [];
const setLocalStorage = (id, value) => localStorage.setItem(id, value);

let id = 0;
let tableTitles = ["dom", "seg", "ter", "qua", "qui", "sex", "sab", "anotações"];

for (let title of tableTitles) {
    createCol(title)
}

function createCol(name) {
    let column = document.createElement("div")
    let h3 = document.createElement("h3")
    let line = document.createElement("div")
    let buttonDelete = document.createElement('button')

    buttonDelete.setAttribute('class', 'clear')
    buttonDelete.innerText = 'Limpar'
    column.setAttribute("class", `column ${name}`)
    h3.innerHTML = name
    line.setAttribute("class", "line")


    for (let i = 0; i < 9; i++) {
        let input = document.createElement("input")
        input.type = "text"
        input.setAttribute("class", `allInputs ${name}`)
        line.appendChild(input)
    }
    column.appendChild(h3)
    column.appendChild(line)
    column.appendChild(buttonDelete)

    table.appendChild(column)
}
let allInputs = document.querySelectorAll(".allInputs")
const btnClear = document.querySelectorAll('.clear')


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
    let colorBg = localStorage.getItem('color')
    planner.style.backgroundColor = colorBg;
}

btnClear.forEach((item) => {
    item.addEventListener('click', (event) => {
        switch (event.target.parentElement.className) {
            case 'column seg':
                document.querySelectorAll('.seg').forEach(ip => {
                    ip.value = ''
                    setLocalStorage(ip.id, ip.value)
                })
                break;
            case 'column ter':
                document.querySelectorAll('.ter').forEach(ip => {
                    ip.value = ''
                    setLocalStorage(ip.id, ip.value)
                })
                break;
            case 'column qua':
                document.querySelectorAll('.qua').forEach(ip => {
                    ip.value = ''
                    setLocalStorage(ip.id, ip.value)
                })
                break;
            case 'column qui':
                document.querySelectorAll('.qui').forEach(ip => {
                    ip.value = ''
                    setLocalStorage(ip.id, ip.value)
                })
                break;
            case 'column sex':
                document.querySelectorAll('.sex').forEach(ip => {
                    ip.value = ''
                    setLocalStorage(ip.id, ip.value)
                })
                break;
            case 'column sab':
                document.querySelectorAll('.sab').forEach(ip => {
                    ip.value = ''
                    setLocalStorage(ip.id, ip.value)
                })
                break;
            case 'column dom':
                document.querySelectorAll('.dom').forEach(ip => {
                    ip.value = ''
                    setLocalStorage(ip.id, ip.value)
                })
                break;
            case 'column anotações':
                document.querySelectorAll('.anotações').forEach(ip => {
                    ip.value = ''
                    setLocalStorage(ip.id, ip.value)
                })
                break;
            default:
                break;
        }


    })
})
saveDados();

document.querySelector('#colorBg').addEventListener('input', (event) => {
    localStorage.setItem('color', `${event.target.value}`)
    planner.style.backgroundColor = `${event.target.value}`
})


function showDate() {
    let data = new Date;
    let week = data.getDay();
    let weekSelect = document.querySelectorAll('h3')


    weekSelect.forEach((item, index) => {
        if (weekSelect.length) {
            weekSelect[index].style.backgroundColor = '#ECA3A3'
            weekSelect[index].style.color = '#976868'
        }
        weekSelect[week].style.backgroundColor = '#a3eca3'
        weekSelect[week].style.color = '#000'
        weekSelect[7].style.backgroundColor = '#b3b3b3'
        weekSelect[7].style.color = '#000'
    })
}
showDate()