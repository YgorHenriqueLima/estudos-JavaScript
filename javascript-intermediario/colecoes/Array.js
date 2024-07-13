const caixa = document.querySelector("#caixa")

let cores = [
    "azul", "verde", "vermelho", ["claro", "escuro", "médio"]
]

let cursos = ["HTML", "CSS", "JavaScript", cores]

// dentro da array de cores eu vou acessar outra array, isso é o que chamamos de matrizes

alert(cursos[3][3])

// // push é adicionado no final da lista
// cursos.push("C++")
// cursos.push("Python")

// // adiciona um elemento no início

// cursos.unshift("Java")
// cursos.shift()
// // pop retira elementos da array
// cursos.pop()

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})

