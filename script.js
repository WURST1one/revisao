/* Criar variaveis */

/* let nome = "HIQ" */
let idade = 22
const anoNascimento = 1977
let idadeEsposa = "22"
//decisão

if (idade === idadeEsposa) {

    alert('igual...')
}else {
    alert("cada um no seu quadrado")
}

/* Lendo informações do HTML */


const titulo = document.getElementById("titulo")
const resultado = document.getElementById("resultado")
const Nome = document.getElementById("Nome")
const  email = document.getElementById("email")


console.log(titulo)

titulo.textContent = "Mudei o titulo! EU posso" 

titulo.style.color = "pink"
titulo.style.backgroundImage = URL="18534260.png"

function mostrarResultado() {
    resultado.textContent = Nome.value+ " " + email.value
}