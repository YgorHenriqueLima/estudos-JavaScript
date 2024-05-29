const div_data = document.querySelector("#data")
const div_relogio = document.querySelector("#div_relogio")
const data = new Date()

let dia=data.getDate()
dia = dia < 10 ? "0" + dia:dia

let mes=data.getMonth()
mes=mes < 10 ? "0" + mes:mes

const data_r = dia + "/" + mes + "/" + data.getFullYear()
div_data.innerHTML = data_r

function relogio(){
    const data = new Date()
    let hora = data.getHours()
    console.log(hora)
}
relogio()