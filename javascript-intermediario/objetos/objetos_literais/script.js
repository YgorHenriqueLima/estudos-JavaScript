const objetos = document.getElementById("objetos"); 

const computador =  {
    cpu:"i9",
    ram:"64GB",
    hd:"2tb",
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}

const c1 = Object.assign({},computador)
const c2 = Object.create(computador)
c2.info()


const o1 = {obj1:"1"}
const o2 = {obj2:"2"}
const o3 = {obj3:"3"}

const o4 = Object.assign(o1,o2,o3)
//console.log(o4)
//delete(computador.hd)
console.log(computador)
/*
const computadores = [
    {
        cpu:"i9",
        ram:"64GB",
        hd:"2tb",
        info:function(){
            console.log(`CPU: ${this.cpu}`)
            console.log(`RAM: ${this.ram}`)
            console.log(`HD: ${this.hd}`)
        }
    },

    {
        cpu:"i7",
        ram:"32GB",
        hd:"1tb",
    },

    {
        cpu:"i5",
        ram:"16GB",
        hd:"512GB",
    }
]
*/

/*
computadores.forEach((c)=>{
    console.log(c)
    const div = document.createElement("div")
    div.setAttribute("class","computadores")
    div.innerHTML = c.cpu + "<br>" + c.ram + "<br>" + c.hd
    objetos.appendChild(div)
})
*/