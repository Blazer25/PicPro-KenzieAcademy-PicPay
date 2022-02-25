//Selecionar Lista - UL
const listaOpcoes = document.querySelector(".secaoDetalhesConta-opcoesTransacoes")

//Add 'escuta' aos eventos
listaOpcoes.addEventListener('click', indentificarOpcoes)

//Exec ação depois do ato de clicar
function indentificarOpcoes(event) {

    //Identifica onde o click ocorreu
    const elemento = event.target

    //Verificar se é um Li
    if (elemento.tagName == "LI") {

        //Rec ID
        const id = elemento.id

        //Seleciona uma seção pelo id, remove classe e add classe
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)
        removeClasseMostrar()
        secaoEscolha.classList.add("mostrar")
    }
}

//Remover classe da div 
function removeClasseMostrar() {
    const divs = document.querySelectorAll(".secaoTransacao .container div")

    for (let i = 0; i < divs.length; i++) {

        divs[i].classList.remove("mostrar")

    }
}