const teclasNumericas = [...document.querySelectorAll(".num")]
const teclasOperacoes = [...document.querySelectorAll(".op")]
const teclaResultado = document.querySelector(".res")
const display = document.querySelector(".display")
const tecla_on = document.querySelector("#ton")
const tecla_limpar = document.querySelector("#tlimpar")
const tecla_igual = document.querySelector("#t_igual")
let sinal=false
let decimal=false
teclasNumericas.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
      
        if(evt.target.innerHTML==","){
            
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }

        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOperacoes.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }       
        }
    })
})
// quando a tecla de limpar for clicado, ele vai fazer com que o display fique com o 0 novamente
tecla_limpar.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    display.innerHTML = "0"
})

tecla_igual.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    // função eval: avalia a expressão de entrada e a executa, e for de caracter matemático, ele resolve a expressão
    const res = eval(display.innerHTML)
    display.innerHTML=res
})
