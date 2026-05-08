const topbarButton = document.getElementById("mobilMenu");
const topbarList = document.getElementById("mobilTopbarList");

topbarButton.addEventListener("click",()=>{
    topbarList.classList.toggle("active");


})