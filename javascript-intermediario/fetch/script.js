const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_pressao = document.getElementById("p_pressao")



const obterdados = () =>{
    const endpoint = "https://eef94aa9-120a-425f-ba93-cbe3b2d5b93d-00-2vnphai8aq8e8.spock.replit.dev/"
    let res = fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        p_temp.innerHTML = "Temperatura: " + dados.temperatura
        p_nivel.innerHTML= "nível: " + dados.nivel
        p_pressao.innerHTML = "pressao: " + dados.pressao
    })
}

let dados = {
    nome: 'bruno',
    
}