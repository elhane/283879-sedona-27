var link = document.querySelector("section.hotel-search .hotel-search-button-brown");
var popup = document.querySelector(".hotel-search-form");
var form = popup.querySelector("form");
var cheсkin = popup.querySelector("[name=date-check-in]");
var cheсkout = popup.querySelector("[name=date-check-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
});

// 
// form.addEventListener("submit", function (evt) {
//     if (!cheсkin.value || !checkout.value) {
//         evt.preventDefault();
//         popup.classList.remove("modal-error");
//         popup.offsetWidth = popup.offsetWidth;
//         popup.classList.add("modal-error");
//         console.log("Заполните все поля формы");
//     }
// });
