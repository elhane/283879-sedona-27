var link = document.querySelector(".hotel-search-button-brown");
var popup = document.querySelector(".hotel-search-form");
var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=date-check-in]");
var checkout = popup.querySelector("[name=date-check-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";


try {
    storageAdults = localStorage.getItem("adults");
} catch (err) {
    isStorageSupport = false;
}

try {
    storageChildren = localStorage.getItem("children");
} catch (err) {
    isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
    checkin.focus();
});

fotm.addEventListener("submit", function (evt) {
    if (!checkin.value || !checkout.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        console.log("Заполните все поля формы");
    }
});