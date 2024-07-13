/*

FUNÇÕES SET

- add = adiciona
- delete = deleta
- clear = limpar
- entries = entrada
- forEach = percorre os elementos
- has = caso um elemento estiver lá
- keys = verifica as chaves 
- values = verifica os valores

*/
const caixa = document.querySelector("#caixa")
let musicas = new Set(["musica1", "musica boa", "musica10"])

/*------------O SET ELE NÃO PERMITE ENTRADA DUPLICADA------------*/
musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica10")


console.log(musicas)
/*método interno*/
musicas.forEach((el)=>{
    caixa.innerHTML += el + "<br>"
})
/*método externo*/
for (let m of musicas){
    caixa.innerHTML += m + "<br>"
}