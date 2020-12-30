//$(document).ready(function(){
//	$('.header__burger').click(function(event){
//		$('.header__burger,.nav').toggleClass('active');
//		$('body').toggleClass('lock');
//	});
//
//	$('.nav__link').click(function(event){
//		$('.header__burger,.nav').toggleClass('active');
//		$('body').toggleClass('lock');
//		});
//
//});

//document.addEventListener('DOMContentLoaded', function(){

//});
const menuIcon = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector(".body");
function burgerClick() {
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    body.toggle("lock");
}
;

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});
