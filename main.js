// Variáveis da aplicação
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Events
//Função Callback
function handleTryClick(event) {
    event.preventDefault() // << Não faça o padrão 

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {

        document
            .querySelector(".screen2 h2")
            .innerText = `Você acertou em ${xAttempts} tentativas.`
    }

    inputNumber.value = ""
    xAttempts++
}

// Funções Callback
function handleTryClick() {
    toggleScreen ()

    btnTry.addEventListener('click', handleTryClick)
    btnReset.addEventListener('click', function () {
        screen1.classList.remove("hide")
        screen2.classList.add("hide")

        document.addEventListener('keydown'), function(e){
            if(e.key == 'Enter'){
                handleTryClick
            }
        }

        xAttempts = 1
    })
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

}
