const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");
const btn_validar = document.querySelector("#btn_validar");
btn_validar.addEventListener("click",(evt)=>{
    let msg=null;
    if(f_nota.validity.valueMisssing){
        msg="poxa,este campo é obrigatório";
    }else if(f_nota.validity.rangeOverflow){
        msg="nossa, que nota alta você digitou"
    }else if(f_nota.validity.rangeUnderflow){
        msg="nossa, que nota baixa você digitou"
    }
    f_msg.innerHTML=f_nota.validationMessage
    evt.preventDefault()
});
