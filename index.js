const day=document.querySelector(".sun")
const night=document.querySelector(".moon")

const body=document.querySelector(".box")

day.addEventListener("click",()=>{
    body.style.background="white"
})

night.addEventListener("click",()=>{
    body.style.background="black"
})