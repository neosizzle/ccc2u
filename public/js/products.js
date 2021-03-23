const nicheBtn = document.getElementById("nicheBtn")
const tabletBtn = document.getElementById("tabletBtn")
const hallBtn = document.getElementById("hallBtn")
const facBtn = document.getElementById("facBtn")
const catBtn = document.getElementById("catBtn")


const contentIframe = document.getElementById("content-iframe")

//event listeners below render the corresponding static assets into the iframe once a click is registered
//to the button

catBtn.addEventListener("click", ()=>{
    contentIframe.src = "./components/products/booklet.html"
})

nicheBtn.addEventListener("click" , ()=>{
    contentIframe.src = "./components/products/niches.html"
})

tabletBtn.addEventListener("click" , ()=>{
    contentIframe.src = "./components/products/tablets.html"
})


hallBtn.addEventListener("click" , ()=>{
    contentIframe.src = "./components/products/hall.html"
})

facBtn.addEventListener("click" , ()=>{
    contentIframe.src = "./components/products/amenities.html"
})