// -----------------set filter :}}} -----------
var FactorFilter = document.getElementById("factor-filter");
var over = document.getElementById("over");
var Open = document.getElementById("open");
var HalfOpen = document.getElementById("half-open");
var backed = document.getElementById("backed");
var DontNeed = document.getElementById("dont-need");
var LastYear = document.getElementById("LastYear");
var ThisYear = document.getElementById("ThisYear");

FactorFilter.addEventListener('change', function () {

    var x = FactorFilter.value;

    if (FactorFilter.value == 1) {
        over.classList.remove("hide1")
        document.getElementById("op1").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 2) {
        Open.classList.remove("hide2")
        document.getElementById("op2").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 4) {
        DontNeed.classList.remove("hide4")
        document.getElementById("op4").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 5) {
        backed.classList.remove("hide5")
        document.getElementById("op5").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 6) {
        LastYear.classList.remove("hide6")
        document.getElementById("op6").setAttribute('disabled', true)
    }
    if (FactorFilter.value == 7) {
        ThisYear.classList.remove("hide7")
        document.getElementById("op7").setAttribute('disabled', true)
    }

})
over.addEventListener('click', function () {
    over.classList.add("hide1")
    document.getElementById("op1").removeAttribute('disabled', true)
})
Open.addEventListener('click', function () {
    Open.classList.add("hide2")
    document.getElementById("op2").removeAttribute('disabled', true)
})
DontNeed.addEventListener('click', function () {

    DontNeed.classList.add("hide4")
    document.getElementById("op4").removeAttribute('disabled', true)
})
backed.addEventListener('click', function () {
    backed.classList.add("hide5")
    document.getElementById("op5").removeAttribute('disabled', true)
})
LastYear.addEventListener('click', function () {
    LastYear.classList.add("hide6")
    document.getElementById("op6").removeAttribute('disabled', true)
})
ThisYear.addEventListener('click', function () {
    ThisYear.classList.add("hide7")
    document.getElementById("op7").removeAttribute('disabled', true)
})



document.getElementById("Create").addEventListener('click', function () {
    window.location.assign("./get-visit.html");
})





let owe = 0;
let borrow = 0;
let remain = 0;

document.querySelectorAll('input[type=checkbox]').forEach(function(item){
    item.addEventListener('click',function(){
        if(item.checked == true){
            owe = owe + Number(this.parentElement.parentElement.children[7].innerHTML)
            document.getElementById('payed').innerHTML=owe
            borrow = borrow + Number(this.parentElement.parentElement.children[8].innerHTML)
            document.getElementById('get-cash').innerHTML=borrow
            remain = remain + Number(this.parentElement.parentElement.lastElementChild.innerHTML)
            document.getElementById('remeinde').innerHTML=remain
        }
        
        else{
            owe = owe - Number(this.parentElement.parentElement.children[7].innerHTML)
            document.getElementById('payed').innerHTML=owe
            borrow = borrow - Number(this.parentElement.parentElement.children[8].innerHTML)
            document.getElementById('get-cash').innerHTML=borrow
            remain = remain - Number(this.parentElement.parentElement.lastElementChild.innerHTML)
            document.getElementById('remeinde').innerHTML=remain
        }
    })
})



