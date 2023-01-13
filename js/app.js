let productBox = document.querySelector(".productbox")
let effectBtn = document.querySelector(".Effect")
let selectBox1 = document.getElementById("cart1");
let selectBox2 = document.getElementById("cart2");
let selectBox3 = document.getElementById("cart3");
// connection
window.addEventListener("offline", function () {
    this.alert("اتصال به اینترنت را چک کنید")
})
window.addEventListener("online", function () {
    this.alert("اتصال اینترنت بر قرار است")
})
// show and hidden productBox
document.querySelector(".btn-darkcyan").addEventListener("click", function () {
    productBox.style.width = "55%";
    effectBtn.style.display = "block"
})
effectBtn.addEventListener("click", function () {
    productBox.style.width = "0%";
    effectBtn.style.display = "none"
})
// change list selectbox
document.querySelector(".position").addEventListener("change", function () {
    if (this.value == 0 || this.value == 1) {
        selectBox1.style.display = "block"
        selectBox2.style.display = "none"
        selectBox3.style.display = "none"
    }
    if (this.value == 2) {
        selectBox1.style.display = "none"
        selectBox2.style.display = "block"
        selectBox3.style.display = "none"
    }
    if (this.value == 3) {
        selectBox1.style.display = "none"
        selectBox2.style.display = "none"
        selectBox3.style.display = "block"
    }
})
// form-control
document.querySelectorAll('#header-bottom input').forEach(function (item) {
    if (item.getAttribute('id') == 'address' || item.getAttribute('id') == 'person-name') {
        item.addEventListener("keydown", function (e) {
            if ((e.key >= 0 && e.key <= 9)) {
                e.preventDefault();
            }
        })
    } else {
        item.addEventListener("keydown", function (e) {
            if ((e.keyCode >= 65 && e.keyCode <= 90)) {
                e.preventDefault();
            }
        })
    }
})
// download excel html table
let downloadBtn = document.getElementById("excel")
var personName = document.getElementById("person-name")
var buyerCode = document.getElementById("buyer-code")
var buyerNumber = document.getElementById("buyer-number")
downloadBtn.addEventListener("click", function ExportToExcel(type, fn, dl) {
    if (personName.value == "" || buyerCode.value == "" || buyerNumber.value == "") {
        alert("لطفا مشخصات خریدار را کامل وارد کنید")
    } else {
        if (confirm("پس از دانلود فرم جدید ایجاد میشود." + "\n" + "آیا ادامه می دهید؟") == true) {
            var wb = XLSX.utils.table_to_book(table, { sheet: "sheet1" });
            return dl ?
                XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
                XLSX.writeFile(wb, fn || (personName.value + '-' + buyerCode.value + '-' + buyerNumber.value + '.' + 'xlsx'));
        }
    }
})

