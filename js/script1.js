$(function() {
	$('.slider').slick({
		vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        autoplay: true,
        responsive: [
    {
      breakpoint: 901,
      	settings: {
        slidesToShow: 1,
        vertical: false,
        verticalSwiping: false,
        arrows : false,
        dots : true,
      }
  }]

	})
})