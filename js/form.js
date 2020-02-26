var link = document.querySelector(".hotel-search-button-brown");
var form = document.querySelector(".hotel-search-form");

var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var checkin = form.querySelector("[name=date-check-in]");
var checkout = form.querySelector("[name=date-check-out]");

var isStorageSupport = true;
var storageAdults = "";
var storageChild = "";

try {
  storageAdults = localStorage.getItem("adults"); 
  storageChild = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  event.preventDefault();
  form.classList.remove("form-error");
  form.classList.toggle("form-hide");
});

form.addEventListener("submit", function(evt) {
  if (!checkin.value || !checkout.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
    if (!checkout.value) {
      checkout.focus();
      if (!checkin.value) { 
        checkin.focus();
}
    } else if (!adults.value) { 
      adults.focus();
    } else children.focus();
  }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
    
      if (form.classList.contains("form-show")) {
        form.classList.add ("form-hide");
        form.classList.remove("form-error");
      }
    }
  });
