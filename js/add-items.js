var showbaskets = document.getElementById("show-baskets")
    var ALLBASKETS = document.getElementById("ALLBASKETS")
    var closebasket = document.getElementById("closebasket")
        
    showbaskets.addEventListener("click",function(){
        menuClose.classList.add("visibaled")
        ALLBASKETS.classList.add("all-baskets")
        ALLBASKETS.style.display = "flex";
    })
    closebasket.addEventListener("click",function(){
        menuClose.classList.remove("visibaled")
        ALLBASKETS.classList.remove("all-baskets")
        ALLBASKETS.style.display = "none";
    })