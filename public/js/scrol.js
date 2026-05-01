const topbar = document.getElementById('topbar');
document.addEventListener("scroll",function(){
    if(window.scrollY > 50){
        topbar.classList.add('scrolled');
    }
    else{
        topbar.classList.remove('scrolled');
    }

});
