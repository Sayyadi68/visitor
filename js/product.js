let allProducts = [
    { id: 1, title: ' سرنگ لوئر لاک (سه تکه) ', desc: " سورنگ 3cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 2, title: ' سرنگ لوئر لاک (سه تکه) ', desc: " سورنگ 5cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 3, title: ' سرنگ لوئر لاک (سه تکه) ', desc: " سورنگ 10cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 4, title: ' سرنگ لوئر لاک (سه تکه) ', desc: " سورنگ 20cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 5, title: ' سرنگ لوئر لاک (سه تکه) ', desc: " سورنگ 3cc - بدون جعبه ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 6, title: ' سرنگ لوئر لاک (سه تکه) ', desc: " سورنگ 5cc - بدون جعبه ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 7, title: ' سرنگ لوئر لاک (سه تکه) ', desc: " 3cc+G18 دو سر سوزن ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 8, title: ' سرنگ لوئر لاک (سه تکه) ', desc: " 5cc+G18 دو سر سوزن ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 9, title: ' سرنگ لوئر اسلیپ (سه تکه) ', desc: " سورنگ 3cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 10, title: ' سرنگ لوئر اسلیپ (سه تکه) ', desc: " سورنگ 5cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 11, title: ' سرنگ لوئر اسلیپ (سه تکه) ', desc: " سورنگ 10cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 12, title: ' سرنگ لوئر اسلیپ (سه تکه) ', desc: " سورنگ 20cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 13, title: ' سرنگ لوئر اسلیپ (سه تکه) ', desc: " سورنگ 3cc - بدون جعبه ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 14, title: ' سرنگ لوئر اسلیپ (سه تکه) ', desc: " سورنگ 5cc - بدون جعبه ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 15, title: ' سرنگ انسولین (یکپارچه) ', desc: " G30 - 1cc(ده تایی) ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 16, title: ' سرنگ انسولین (یکپارچه) ', desc: " G30 - 1cc(يكي) ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 17, title: ' سرنگ انسولین (یکپارچه) ', desc: " G31 - 1cc ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 18, title: ' سرنگ انسولین (یکپارچه) ', desc: " G31 - 0.5cc", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 19, title: ' سر سوزن پزشکی ', desc: "G18", discount: 5000, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 20, title: ' سر سوزن پزشکی ', desc: "G20", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 21, title: ' سر سوزن پزشکی ', desc: "G21", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 22, title: ' سر سوزن پزشکی ', desc: "G22", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 23, title: ' سر سوزن پزشکی ', desc: "G23", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 24, title: ' سر سوزن پزشکی ', desc: "G25", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 25, title: ' سر سوزن پزشکی ', desc: "G26", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 26, title: ' سر سوزن پزشکی ', desc: "G27", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 27, title: ' سر سوزن پزشکی ', desc: "G29", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 28, title: ' سر سوزن پزشکی ', desc: "G30", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 29, title: ' سر سوزن پن انسولین ', desc: "G4", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 30, title: ' سر سوزن پن انسولین ', desc: "G5", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 31, title: ' سر سوزن پن انسولین ', desc: "G6", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 32, title: ' سر سوزن پن انسولین ', desc: "G31", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 33, title: ' سر سوزن پن انسولین ', desc: "G32", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 34, title: ' لنست خون گیری ', desc: " G28 - آبی ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 35, title: ' لنست خون گیری ', desc: " G30 - سبز ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 36, title: 'سرنگ خودتخریب(AD)', desc: " G23(0.5cc) ", discount: 0, gift: 0, giftCount: 0, price: 2000, img: '', count: 1 },
    { id: 37, title: 'اسكالپ وين', desc: " G21 - سبز ", discount: 0, gift: 0, img: '', giftCount: 0, price: 2000, count: 1 },
]

// dynamic array
let $ = document;
let userBasket = []
let productFragment = $.createDocumentFragment();

allProducts.forEach(function (product) {
    let productContainer = $.createElement("div");
    productContainer.className = "col-5 p-1 d-flex justify-content-center";

    productContainer.insertAdjacentHTML('beforeend', '<div class="card" style="width: 12rem;"><img src="..." class="card-img-top" alt="..."><div class="card-body"><h4 class="card-title text-center">' + product.title + '</h4><p class="card-text text-center">' + product.desc + '</p><label for="input" class="text-center mb-2">قيمت<input class="w-50 text-center border-dark rounded p-1 ms-1 formColor" type="number" value="" placeholder=0></label><section class="d-flex align-items-center"><button class="btn btn-success my-3" onclick="addProductToBasketArray(' + product.id + ')">افزودن</button><input class="from-control w-50 text-center border-dark rounded p-1 ms-2 formColor" type="number" placeholder="تعداد"></section></div></div></div>');

    productFragment.append(productContainer);
})

let productDivElem = productFragment.querySelectorAll(".col-5");
let NumberDivElem = productDivElem.length;

for (let index = 0; index < NumberDivElem; index++) {
    if (index >= 0 && index <= 7) {
        $.getElementById("card-1").append(productDivElem[index]);
    }
    if (index > 7 && index < 14) {
        $.getElementById("card-2").append(productDivElem[index]);
    }
    if (index >= 14 && index < 18) {
        $.getElementById("card-3").append(productDivElem[index]);
    }
    if (index >= 18 && index < 28) {
        $.getElementById("card-4").append(productDivElem[index]);
    }
    if (index >= 28 && index < 33) {
        $.getElementById("card-5").append(productDivElem[index]);
    }
    if (index >= 33) {
        $.getElementById("card-6").append(productDivElem[index]);
    }
}

var tableBody = $.getElementById("tbody");
var table = $.getElementById("visitor-table");
let inputCount = $.querySelectorAll(".ms-2");
let productPrice = $.querySelectorAll(".ms-1");

const numberWithCommas = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ريال';
const roundPrice = number => Math.floor(Number(number))

function addProductToBasketArray(productId) {
    let mainProduct = allProducts.find(product => product.id === productId)
    let mainBasketProduct = userBasket.find(product => product.id === productId)
    if (mainBasketProduct === mainProduct) {
        const countProduct = mainProduct.count;
        mainBasketProduct.count = roundPrice(mainProduct.count) + roundPrice(inputCount[(productId - 1)].value);
        mainBasketProduct.price = (mainProduct.price * countProduct + inputCount[(productId - 1)].value * productPrice[(productId - 1)].value) / mainBasketProduct.count;
        createTableWithBasketArray();
    } else {
        mainProduct.count = inputCount[(productId - 1)].value;
        mainProduct.price = productPrice[(productId - 1)].value;
        userBasket.push(mainProduct);
        createTableWithBasketArray();
    }
    calcTotalPrice(userBasket);
}

function createTableWithBasketArray() {
    tableBody.innerHTML = "";
    let cellCount = table.rows[0].cells.length;
    for (let i = 0; i < userBasket.length; i++) {
        let row = tableBody.insertRow(i);
        for (let j = 0; j < cellCount; j++) {
            let cell = row.insertCell(j);
        }
        tableBody.rows[i].cells[0].innerHTML = i + 1;
        tableBody.rows[i].cells[1].innerHTML = userBasket[i].title;
        tableBody.rows[i].cells[2].innerHTML = userBasket[i].desc;
        tableBody.rows[i].cells[3].innerHTML = roundPrice(userBasket[i].count);
        tableBody.rows[i].cells[4].innerHTML = numberWithCommas(roundPrice(userBasket[i].price));
        tableBody.rows[i].cells[5].innerHTML = numberWithCommas(roundPrice((userBasket[i].price * userBasket[i].count)))
        tableBody.rows[i].cells[6].innerHTML = numberWithCommas(roundPrice(userBasket[i].discount));
        tableBody.rows[i].cells[7].innerHTML = numberWithCommas(roundPrice((userBasket[i].price * userBasket[i].count) - userBasket[i].discount));
        tableBody.rows[i].cells[8].innerHTML = numberWithCommas(roundPrice((userBasket[i].price * userBasket[i].count) + (0.09 * userBasket[i].price * userBasket[i].count)));
        tableBody.rows[i].cells[9].innerHTML = '<i onclick="removeProductFromBasket(this)" class="fa-solid fa-trash"></i>'
    }
}

function calcTotalPrice(userBasketArray) {
    let totalPriceValue = 0;

    userBasketArray.forEach(function (product) {
        totalPriceValue += (product.count * product.price) + 0.09 * (product.count * product.price);
    })

    let totalDiscountValue = 0;

    userBasketArray.forEach(function (product) {
        totalDiscountValue += (product.discount);
    })

    $.getElementById("sumProduct").innerHTML = numberWithCommas(roundPrice(totalPriceValue));
    $.getElementById("sumDiscount").innerHTML = numberWithCommas(roundPrice(totalDiscountValue));
    $.getElementById("payClean").innerHTML = numberWithCommas(roundPrice(totalPriceValue) - roundPrice(totalDiscountValue));
}

function removeProductFromBasket(ele) {
    let tier = ele.parentNode.parentNode.firstChild.innerHTML;
    let indexTable = table.rows.length - 1;
    userBasket.splice((tier - 1), 1);
    if (confirm('آیا از حذف ردیف ' + tier + ' مطمئن هستید؟') == true) {
        for (let index = tier; index <= indexTable; index++) {
            --document.getElementsByTagName("tr")[index].firstChild.innerHTML;
        }
        ele.parentNode.parentNode.remove();
    }
    calcTotalPrice(userBasket);
}

$.getElementById("deleteAllBtn").addEventListener("click", function () {
    if (confirm('آیا از حذف همه محصولات مطمئن هستید؟') == true) {
        userBasket = [];
        tableBody.innerHTML = "";
        calcTotalPrice(userBasket);
    }
})