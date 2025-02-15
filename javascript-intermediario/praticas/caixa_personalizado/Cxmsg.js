class Cxmsg {
    titulo = null;
    texto = null;
    cor = null;
    destino = null;
    divmsg = null;

    constructor(config) {
        this.titulo = config.titulo;
        this.texto = config.texto;
        this.cor = config.cor;
        this.destino = document.body;
    }

    mostrar() {
        this.divmsg = document.createElement("div");
        
        /* Estilo da área da caixa de mensagem */
        const estilo_divmsg = `
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            background-color: rgba(0,0,0,0.7);
            z-index: 9999;
        `;

        this.divmsg.setAttribute("id", "div_msg");
        this.divmsg.setAttribute("style", estilo_divmsg);
        this.destino.prepend(this.divmsg);

        /* Criando a caixa de mensagem */
        const estilo_areaCxmsg = `
            display: flex;
            flex-direction: column;
            width: 300px;
            background-color: white;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        `;

        const areaCxmsg = document.createElement("div");
        areaCxmsg.setAttribute("style", estilo_areaCxmsg);
        this.divmsg.appendChild(areaCxmsg);

        /* Criando o título */
        const estilo_tituloCxmsg = `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-color: ${this.cor};
            color: #fff;
            padding: 10px;
            font-size: 18px;
            font-weight: bold;
        `;

        const tituloCxmsg = document.createElement("div");
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg);
        tituloCxmsg.innerHTML = this.titulo;
        areaCxmsg.appendChild(tituloCxmsg);

        /* Criando o corpo da mensagem */
        const estilo_corpoCxmsg = `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-color: #eee;
            color: #000;
            padding: 30px 10px;
            font-size: 16px;
            text-align: center;
        `;

        const corpoCxmsg = document.createElement("div");
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg);
        corpoCxmsg.innerHTML = this.texto;
        areaCxmsg.appendChild(corpoCxmsg);

        /* Criando o rodapé */
        const estilo_rodapeCxmsg = `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-color: #ccc;
            padding: 10px;
        `;

        const rodapeCxmsg = document.createElement("div");
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg);
        areaCxmsg.appendChild(rodapeCxmsg);

        /* Criando o botão OK */
        const estilo_botaoOK = `
            background-color: ${this.cor};
            color: #fff;
            padding: 10px 50px;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
            border: none;
            font-size: 14px;
        `;

        const botaoOK = document.createElement("button");
        botaoOK.setAttribute("style", estilo_botaoOK);
        botaoOK.innerHTML = "OK";
        rodapeCxmsg.appendChild(botaoOK);
        
        botaoOK.addEventListener("click", () => {
            this.ocultar();
        });
    }

    ocultar() {
        if (this.divmsg) {
            this.divmsg.remove();
        }
    }
}
