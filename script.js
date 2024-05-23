let avancar = document.querySelector(".mais") 
let voltar = document.querySelector(".menos") 

let items = document.querySelectorAll(".item")
let round = 7
let index = 0
let butMenos = document.querySelector(".menos")
let butMais = document.querySelector(".mais")

function voltarQuadro(){
    if(index == 1){
        butMenos.style.cursor = "not-allowed"
    }
    if(index > 0){
        round--
        index--
        items[index].style.display = "flex"
        butMais.style.cursor = "pointer"

    }
    else if(index == 0){
        items[index].style.display = "flex"

    }
}
function pularQuadro(){
    if(index == 0){
        butMenos.style.cursor = "pointer"

    }
    if(round <= items.length - 1){
        items[index].style.display = "none"
        index++
        round++
        if(round == items.length){
            butMais.style.cursor = "not-allowed"

        }
    }
}

voltar.addEventListener("click",voltarQuadro)
avancar.addEventListener("click",pularQuadro)