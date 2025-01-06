const p_temp = document.getElementById("p_temp");
const p_nivel = document.getElementById("p_nivel");
const p_pressao = document.getElementById("p_pressao");
const btn_texto = document.getElementById("btn_texto");

const obterdados = () =>{
    /*URL criado no replit para geração de números aleatórios de 0 a 10*/
    const endpoint = "https://eef94aa9-120a-425f-ba93-cbe3b2d5b93d-00-2vnphai8aq8e8.spock.replit.dev/";
    fetch(endpoint)
    /*obtendo os dados convertidos para json*/
    .then(res=>res.json())
    /*resposta tratada e convertida em texto*/
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML = "Temperatura: " + dados.temperatura
        p_nivel.innerHTML= "nível: " + dados.nivel
        p_pressao.innerHTML = "pressao: " + dados.pressao
    });
}

//let intervalo = setInterval(obterdados, 2000)

let dados={
    nome:"bruno",
    canal:"CFBcursos",
    curso:"javascript"
};

let cabecalho={
    method:"POST",
    /*passando os dados para o body*/
    body:JSON.stringify(dados)
};

const gravarDados=()=>{
    const endpoint = "https://eef94aa9-120a-425f-ba93-cbe3b2d5b93d-00-2vnphai8aq8e8.spock.replit.dev/";
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    });
};

btn_texto.addEventListener("click",()=>{
    gravarDados()
})