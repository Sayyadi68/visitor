// connection
window.addEventListener("offline", function () {
    this.alert("اتصال به اینترنت را چک کنید")
})
window.addEventListener("online", function () {
    this.alert("اتصال اینترنت بر قرار است")
})
// menu
var menu = document.getElementById("menu");
var menuClose = document.getElementById("menuClose");


document.getElementById("addMenu").addEventListener("click", function () {
    menu.classList.toggle("showmenu");
    menuClose.classList.add("visibaled")
})
menuClose.addEventListener("click", function () {
    menu.classList.remove("showmenu");
    menuClose.classList.remove("visibaled")
    ITEMSSHOW.classList.add("DropDownMenu-close")
    ROTATE.classList.remove("rotate")
    ITEMSSHOW2.classList.add("DropDownMenu-close2")
    ROTATE2.classList.remove("rotate2")
    ITEMSSHOW3.classList.add("DropDownMenu-close3")
    ROTATE3.classList.remove("rotate3")

    ALLBASKETS.classList.remove("all-baskets")
    ALLBASKETS.style.display = "none";
})

var ITEMSSHOW = document.getElementById("ITEMS-SHOW")
var ROTATE =document.getElementById("rotate")

var ITEMSSHOW2 = document.getElementById("ITEMS-SHOW2")
var ROTATE2 =document.getElementById("rotate2")

var ITEMSSHOW2 = document.getElementById("ITEMS-SHOW3")
var ROTATE2 =document.getElementById("rotate3")

document.getElementById("ITEMS-CONTAINER").addEventListener('click',function(){
    ITEMSSHOW.classList.toggle("DropDownMenu-close")
    ROTATE.classList.toggle("rotate")
})

document.getElementById("ITEMS-CONTAINER2").addEventListener('click',function(){
    ITEMSSHOW2.classList.toggle("DropDownMenu-close2")
    ROTATE2.classList.toggle("rotate2")
})

document.getElementById("ITEMS-CONTAINER3").addEventListener('click',function(){
    ITEMSSHOW3.classList.toggle("DropDownMenu-close3")
    ROTATE3.classList.toggle("rotate3")
})


// navbar announs and message  

var attention = document.getElementById("attention")
var classAnnounce = document.getElementById("annonce-class").addEventListener('click',function(){
    attention.classList.toggle("dispaynoun")
    allmsg.classList.add("dispaynoun")
})



var allmsg = document.getElementById("allmsg");
var classcomments = document.getElementById("comments-class").addEventListener('click',function(){
    allmsg.classList.toggle("dispaynoun")
    attention.classList.add("dispaynoun")
})
