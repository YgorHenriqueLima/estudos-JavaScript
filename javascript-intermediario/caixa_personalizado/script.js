const config = {
    titulo:"teste",
    texto:"cfbcursos",
    cor:"#48f"
}
const cxmsg=new Cxmsg(config)
const btn_mostrarcxmsg = document.querySelector("button.btn_mostrarcxmsg");

btn_mostrarcxmsg.addEventListener("click",()=>{
    cxmsg.mostrar();
})