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
