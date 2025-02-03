class Cxmsg{
    titulo=null;
    texto=null;
    cor=null;
    destino=null;
    divmsg=null;

    constructor(config){
        this.titulo=config.titulo;
        this.texto=config.texto;
        this.cor=config.cor;
        this.destino=document.body;
    }

    mostrar(){
        this.divmsg = document.createElement("div");
        /*estilo da área em que vai estar a caixinha*/
        const estilo_divmsg=`
            display:flex;
            justify-content:center;
            align-items:center;
            position:absolute;
            top:0px;
            left:0px;
            width:100%;
            height:100vh;
            background-color:rgba(0,0,0,0.7);
        `;

        this.divmsg.setAttribute("id","div_msg");
        this.divmsg.setAttribute("style",estilo_divmsg);
        /*será adicionado ao topo*/
        this.destino.prepend(this.divmsg)

        /*essa será a caixinha e abaixo o seu estilo*/
        const estilo_areaCxmsg =`
            display:flex;
            justify-content:flex-start;
            align-items:center;
            flex-direction:column;
            width:300px;
        `;
        const areaCxmsg = document.createElement("div")
        areaCxmsg.setAttribute("style",estilo_areaCxmsg);

        this.divmsg.appendChild(areaCxmsg)

    }
    
    ocultar(){

    }
}