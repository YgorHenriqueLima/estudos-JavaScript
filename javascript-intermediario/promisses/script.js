const numero = document.querySelector("#numero")
const btn_promessa = document.querySelector("#btn_promessa")

btn_promessa.addEventListener("click",(evt)=>{    
    numero.innerHTML="processando..."
    promessa()  
    // deu certo
    .then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    // deu errado
    .catch((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("ok")
        numero.classList.add("erro")
    })
})

const promessa=()=>{
    let p = new Promise((resolve,reject)=>{
        let resultado=false
        let tempo=3000    
        setTimeout(()=>{
            if(resultado){
                resolve("deu tudo certo")
            }else{
                reject("deu tudo errado")
            }
        }, tempo)
    })
    return p
}
numero.innerHTML="esperando"