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

//BURGER
let menuPageBurger = document.querySelector(".menu-page__burger");
let menuPageBody = document.querySelector(".menu-page__body");
menuPageBurger.addEventListener("click", function (e) {
    menuPageBurger.classList.toggle("_active");
    menuPageBody.classList.toggle("_active");
});

//MENU
let menuParents = document.querySelectorAll(".menu-page__parent");
for (let i = 0; i < menuParents.length; i++) {
    let menuParent = menuParents[i];
    menuParent.addEventListener("mouseenter", function (e) {
        menuParent.classList.add("_active");
    });
    menuParent.addEventListener("mouseleave", function (e) {
        menuParent.classList.remove("_active");
    });
}

let searchSelect = document.querySelector('.search-page__select');
let categoriesSearch = document.querySelector('.categories-search');
searchSelect.addEventListener('click', function(e){
    categoriesSearch.classList.toggle('_active');
    searchSelect.classList.toggle('_active');
});


let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
let checkedCategories=[];
function checkElements(el){
    return el.checked;
}
for(let i=0; i<checkboxCategories.length; i++){   

    let checkboxCategory = checkboxCategories[i];
        checkboxCategory.addEventListener('click', function(e){

            let checkboxes = document.querySelectorAll('.checkbox__input');
            let checkboxesArr = Array.from(checkboxes);
            checkedCategories = checkboxesArr.filter(checkElements);

            if(checkedCategories.length > 0){
                searchSelect.classList.add('_categories');
                let searchQuantity = searchSelect.querySelector('.search-page__quantity');
                searchQuantity.innerHTML = searchQuantity.getAttribute('data-text')+' '+checkedCategories.length;
            }else{
                searchSelect.classList.remove('_categories');
            }
        })
};
