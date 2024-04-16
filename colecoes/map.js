const caixa = document.querySelector("#caixa")
let mapa=new Map()

mapa.set("curso", "JavaScript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 100)
console.log(mapa)
caixa.innerHTML = mapa.get("curso")
let pes = 10
let res = ""
if (mapa.has("canal")){
    caixa.innerHTML = "A chave existe na coleção com o valor: " + mapa.get(pes) 
} else {
    caixa.innerHTML = "A chave não está na coleção"
}
res += "<br> o tamanho da coleção é" + mapa.size
caixa.innerHTML = res