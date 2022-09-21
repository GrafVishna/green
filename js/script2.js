$(document).ready(function () {
	$('.burger__button').click(function (event) {
		$('.burger__button, .up__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.block__title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});




// let burger__button = document.querySelector(".burger__button");
// let up__list = document.querySelector(".up__list");

// burger__button.addEventListener("click", mobileMenu);

// function mobileMenu() {
// 	burger__button.classList.toggle("active");
// 	up__list.classList.toggle("active");
// }
