const bgBtn = document.getElementById("bgBtn")
const teamBtn = document.getElementById("teamBtn")
const milestoneBtn = document.getElementById("milestoneBtn")

const contentIframe = document.getElementById("content-iframe")

//renders bg.html to conent iframe once bgBtn is clicked
bgBtn.addEventListener("click" , ()=>{
    contentIframe.src = "./bg.html"

})

//renders team.html to content iframe once teamBtn is clicked
teamBtn.addEventListener("click" , ()=>{
    contentIframe.src = "./team.html"
})

//renders milestone.html to content iframe once milestoneBtn is clicked
milestoneBtn.addEventListener("click" , ()=>{
    contentIframe.src = "./milestone.html"
})