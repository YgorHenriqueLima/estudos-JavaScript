// CÓDIGO ESTUDADO NO CANAL DO CFB CURSOS

const palco = document.getElementById('palco')
const num_objeto  = document.getElementById('num_objetos')
const txt_qtde  = document.getElementById('txt_qtde')
const btn_add  = document.getElementById('btn_add')
const btn_remover  = document.getElementById('btn_remover')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
// aqui é onde vou adicionar os objetos bolas dentro desta array
let bolas = []
let numBolas = 0

// Class Bola
/*
    quando adicionamos uma bola ela tem atributos em comum
    -> cor diferente
    -> velocidade diferente
    -> direções diferentes
    -> tamanhos diferentes
*/ 

class Bola { 
    
        // cada bolinha que instanciar na tela tem que ter um id diferente, pois cada bolinha será controlado por um objeto Bola instanciada no array Bolas, tenho que saber
        /*
            -> qual meu ID;
            -> qual meu palco;
            -> onde instanciar;
            
        */
    constructor(arrayBolas, palco){
        //vamos definir o tamanho da bolinha, vamos gerar os tamanhos automaticamente com o gerador random da classe Math,e o floor permite o arredondamento
        this.tam = Math.floor(Math.random()*15)+10
        //Cores RBG gerando automaticamente
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)

        /* definindo as posições dessas bolinhas, pois a geração delas serão aleatórias*/ 
        /*
            aqui precisamos saber o tamanho máximo da tela, e isso vem da largura do palco, isto é vai de 0 até a largura do palco, só que menos o tamanho da bolinha
        */
        this.px = Math.floor(Math.random()*(larguraPalco-this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco-this.tam))

        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        /*definindo as direções das bolinhas*/
        this.dirx = (Math.random()*10) > 5 ? 1 : -1
        this.diry = (Math.random()*10) > 5 ? 1 : -1

        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random*10000000000)
       
        this.desenhar()

        this.controle=setInterval(this.controlar, 10)
        this.eu=document.getElementById(this.id)
    }

    // função para retornar a posição da bolinha

    minhaPos=()=>{

    }

    remover=()=>{

    }

    // método para controlar a movimentação das bolinhas
    controlar=()=>{

    }

    // vai desenhar a bolinha no DOM
    desenhar=()=>{

    }
}


// esse evento vai disparar quando eu redimensionar a janela do navegador
window.addEventListener("resize",(evt)=>{
    let larguraPalco = palco.offsetWidth
    let alturaPalco = palco.offsetHeight
    console.log(larguraPalco)
})

btn_add.addEventListener("click",(evt)=>{
    /*para obter as quantidades de bolinhas para a tela, é preciso adiciona-los a partir do input do #txt_qtde*/
    const qtde = txt_qtde.value 
    for(let i=0; i<qtde;i++){
        // instanciar novas bolinhas
    }
})

btn_remover.addEventListener("click",(evt)=>{
    /*
    para remover é preciso saber que as bolinhas serão adicionadas na array de bolas, criar um objeto e adicionar na array
    basta percorrer nessa array e percorrer objeto por objeto
    */
    bolas.map((b)=>{
        // Remover a bolinha
    })
})