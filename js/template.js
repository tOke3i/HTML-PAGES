jQuery(function($) {

	/* =============== SHOW / HIDE FORM SEARCH =============== */
	$("header .bike-search, #bike-searchForm .bike-close").click(function(){
		$("#bike-searchForm").toggleClass("open");
	});

	/* =============== SHOW / HIDE GOOGLE MAP =============== */
	$("#bike-map .bike-sectionHeading").click(function(){
		$("#bike-map").toggleClass("showMap");
		$(this).find(".text").toggle();
	});

	// /* =============== CUSTOM SCROLLBAR STYLE =============== */
	$("#bike-whatWeDo .panel-body").mCustomScrollbar({
		theme:"default"
	});

	/* =============== MAKE MAIN MENU STICKED ON TOP WHEN SCROLL =============== */
	$(window).scroll(function () {
		if ($(this).scrollTop() == $('#bike-header').height() || $(this).scrollTop() > 100) {
			$('body').addClass("bike-fixed-nav");
			$('body').css('padding-top', $('#bike-navbar').height() + 'px');
		} else {
			$('body').removeClass("bike-fixed-nav");
			$('body').css('padding-top', 0);
		}
	});

	/* =============== ISOTOP =============== */
	$(window).load(function(){
		$portfolio = $('.bike-portfolioItems');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'masonry'
		});
	});

	/* =============== PORTFOLIO HOVER EFFECT =============== */
	$('.bike-portfolioItems > li').each( function() { $(this).hoverdir(); } );


	/* =============== SMOOTH SCROOL EFFECT =============== */
	$('.bike-menuItem ul li a:not(.link-to-page)').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	/* =============== SHOW / HIDE GO TO TOP =============== */
	/* Check to see if the window is top if not then display go top button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#bike-scrollToTop').fadeIn();
		} else {
			$('#bike-scrollToTop').fadeOut();
		}
	});
	/* Click event to scroll to top */
	$('#bike-scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

        $('#slider-header').slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
		});


	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.item',
		layoutMode: 'fitRows'
	});
// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt( number, 10 ) > 50;
		},
		// show if name ends with -ium
		ium: function() {
			var name = $(this).find('.name').text();
			return name.match( /ium$/ );
		}
	};
// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

});
[]
$(document).ready(function(){
    $("#book-menu,#book-now").on("click",function(){
    	$("#accordion-book .panel-heading .collapsed").trigger( "click" )
	});

    $("a[href='#bike-portfolio']").on("click",function(){
        $("#nearestID").trigger( "click" );
    });

})