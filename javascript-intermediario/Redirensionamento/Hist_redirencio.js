const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url") 

btn_url.addEventListener("click",()=>{
    //window.location="https://www.google.com.br"
    // replace redirenciona para outro site e não volta
    // assign faz a mesma ação, porém não remove do histórico
    // reload
    //window.location.reload() - recarrega a página
    //window.location.assign("https://www.google.com.br")
    window.location = url.value
})
