const caixa = document.querySelector("#caixa")

/*forma funcional mas não tão prática:

const curso = "JavaScript"
const canal = "CFB Cursos"
const frase = "Este é o curso de " + curso + " do canal " + canal

caixa.innerHTML = frase
*/
const carros = ["polo", "Golf", "T-cross", "HRV"]
let ol = `<ol>`
carros.map((el)=>{
    ol += `<li>${el}</li>`
})

const curso = "JavaScript"
const canal = "CFB Cursos"
const frase =  `Este é o curso de ${curso} <br> 
                do canal ${canal}`
caixa.innerHTML = ol