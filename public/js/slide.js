const sliderAll = document.querySelector(".sliderall");
const lis = sliderAll.querySelectorAll("li");
const rightarr = document.getElementById("rightarr");
const lefttarr = document.getElementById("leftarr");

let num = 0;


function updateActiveClass(){
    lis.forEach((li,index)=>{
        li.classList.toggle("active",index === num);
    });

}
rightarr.addEventListener('click',()=>{
    num++; 
    if(num >= lis.length){
        num = 0;
        
    }
    sliderAll.style.transform = `translateX(-${(num * 100)}%)`;
    updateActiveClass();
    //sliderAll.className = "sliderall active" + num;
    
    

});

lefttarr.addEventListener('click',()=>{
    num--;
    if(num < 0){
        num = lis.length - 1;
    }
    sliderAll.style.transform = `translateX(-${(num * 100)}%)`;
    updateActiveClass();

    
    //sliderAll.className = "sliderall active" + num;
    
    
});


 //sliderAll.style.transform = "translateX(-" + (n * 100) + "%)";


