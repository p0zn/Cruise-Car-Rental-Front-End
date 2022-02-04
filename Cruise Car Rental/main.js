// Incelemeler - Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// ---------------------------------------------------------------------

// Giriş yap - Kayıt ol - Araç detay sayfaları
var modal_sign_in = document.getElementById('myModal-sign-in');
var modal_sign_up = document.getElementById('myModal-sign-up');
var modal_detail = document.getElementById('car_detail');

var span_sign_in = document.getElementById('span-sign-in');
var span_sign_up = document.getElementById('span-sign-up');
var span_detail = document.getElementById('span_detail');

var btn_sign_in = document.getElementById("sign-in");
var btn_sign_up = document.getElementById("sign-up");
var btn_rental = document.getElementById("rental");
var btn_register = document.getElementById('register');

var span = document.getElementsByClassName("close")[0];

btn_register.onclick = function() {
  modal_detail.style.display = "none";
  modal_sign_in.style.display = "none";
  modal_sign_up.style.display = "block";
}

btn_sign_in.onclick = function() {
    modal_detail.style.display = "none";
    modal_sign_up.style.display = "none";
    modal_sign_in.style.display = "block";
}

btn_sign_up.onclick = function() {
    modal_detail.style.display = "none";
    modal_sign_in.style.display = "none";
    modal_sign_up.style.display = "block";
}

btn_rental.onclick = function() {
  modal_detail.style.display = "block";
}

span_sign_in.onclick = function() {
    modal_sign_in.style.display = "none";
}

span_sign_up.onclick = function() {
  modal_sign_up.style.display = "none";
}

span_detail.onclick = function() {
  modal_detail.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal_sign_in) {
        modal_sign_in.style.display = "none";
    }
    if (event.target == modal_sign_up) {
      modal_sign_up.style.display = "none";
    }
    if (event.target == modal_detail) {
      modal_detail.style.display = "none";
    }
}

// ---------------------------------------------------------------------

// Menu underline
var header = document.getElementById("myMenu");
var btns = header.getElementsByClassName("menu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("click");
  current[0].className = current[0].className.replace(" click", "");
  this.className += " click";
  });
}

// ---------------------------------------------------------------------

// Giriş yap - Kayıt ol için hata mesajı
var btn_login = document.getElementById("btn_login");
var btn_register = document.getElementById("btn_register");
var alert_close = document.getElementById('alert_close');
var alert = document.getElementById('alert');

btn_login.onclick = function() {
  alert.style.display = 'block';
  window.setTimeout(alertClose, 3000); 
}
btn_register.onclick = function() {
  alert.style.display = 'block';
  window.setTimeout(alertClose, 3000); 
}
function alertClose() {
  alert.style.display = 'none';
}
alert_close.onclick = function() {
  alert.style.display = "none";
}