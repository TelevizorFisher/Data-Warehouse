$(document).ready(function(){
	$('.slider').slick({
		centerMode: true,
		centerPadding: '60px',
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:2500,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

