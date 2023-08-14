function aparecerNumero(num){
    const valorInput = document.querySelector(".display").value

    document.querySelector(".display").value = valorInput + num
}

function limpaTela(){
    document.querySelector(".display").value = ""
}

function trocaSinal(){
    const valorInput = document.querySelector(".display").value

    document.querySelector(".display").value = valorInput * -1
}

function calcular(){
    const valorInput = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorInput)
}