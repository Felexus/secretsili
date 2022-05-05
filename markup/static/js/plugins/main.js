
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	// forms();


	// My

	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});


	// КУРСЫ ХЕДЕР 
	$(".header__course-top").click(function() {
		$(".header__course-container").removeClass('hide')
	});
	$(".header__course-container-close").click(function() {
		$(".header__course-container").addClass('hide')
	});


	// МЕНЮ ХЕДЕР
	$(".header__hamburger-collapsible-header").click(function() {
		$(this).closest(".header__hamburger-collapsible-item").find(".header__hamburger-collapsible-body").toggleClass("active")
	});
	$(".header__hamburger-collapsible-header").click(function() {
		$(this).find(".icon__arrd").toggleClass("active")
	});


	$(".header__course-top.hct").click(function() {
		$(".header__course-container").removeClass('hide')
		$("body, html").css("overflow","hidden")
	});
	$(".header__course-container-close").click(function() {
		$(".header__course-container").addClass('hide')
		$("body, html").css("overflow","auto")
		$("body, html").css("overflow-x","hidden")
	});


	$(".header__hamburger").click(function() {
		$(".header__hamburger-popup").addClass("active")
		$("body, html").css("overflow","hidden")
	});
	$(".header__hamburger-blur").click(function() {
		$(".header__hamburger-popup").removeClass("active")
		$("body, html").css("overflow","auto")
		$("body, html").css("overflow-x","hidden")
	});
	$(".header__hamburger-close").click(function() {
		$(".header__hamburger-popup").removeClass("active")
		$("body, html").css("overflow","auto")
		$("body, html").css("overflow-x","hidden")
	});




	$(".stat__container-more").click(function() {
		$(".stat__container-more2").addClass("active")
		$(".stat__container-more").addClass("hide")
		$(".stat__container-items-item").removeClass("hide")
	});	


	$(".news__content-more").click(function() {
		$(".news__content-more").addClass("hide")
		$(".news__container-item").removeClass("hide")
		$(".news").css("padding-bottom", "72px")
	});	


	$(".double__page-left-bottom-more").click(function() {
		$(".rasp__container-content-item").removeClass("hide")
		$(".akc-item").removeClass("hide")
		$(".galleryg__content-item").removeClass("hide")
		$(".catalog__container-items-box-item").removeClass("hide")
		$(".double__page-left-bottom-more").addClass("hide")
	});	

	$(".reviews__bottom-more").click(function() {
		$(".reviews__content-item").removeClass("hide")
		$(".reviews__bottom-more").addClass("hide")
	});	
	
	$(".course__content-que-item").click(function() {
		$(this).find(".course__content-que-item-content").toggleClass("hide")
		$(this).find(".course__content-que-item-top-plus").toggleClass("rot")
	});	

	// КАТАЛОГ ПЛИТКА И СТРОКИ
	$(".catalog__container-categ-top-ps-s").click(function() {
		$(this).addClass("active")
		$(".catalog__container-categ-top-ps-p").removeClass("active")
		$(".catalog__container-items-box").removeClass("plit")
		$(".catalog__container-items-box").addClass("strock")
	});	
	$(".catalog__container-categ-top-ps-p").click(function() {
		$(this).addClass("active")
		$(".catalog__container-categ-top-ps-s").removeClass("active")
		$(".catalog__container-items-box").removeClass("strock")
		$(".catalog__container-items-box").addClass("plit")
	});	


	$(".catalog__container-categ-top-title").click(function() {
		$(".catalog__container-categ-checks").addClass("active")
		$("body, html").css("overflow","hidden")
	})
	$(".catalog__container-categ-checks-btn").click(function() {
		$(".catalog__container-categ-checks").removeClass("active")
		$("body, html").css("overflow","auto")
		$("body, html").css("overflow-x","hidden")
	})
	$(".catalog__container-categ-checks-close").click(function() {
		$(".catalog__container-categ-checks").removeClass("active")
		$("body, html").css("overflow","auto")
		$("body, html").css("overflow-x","hidden")
	})

	// ТАЙМЕР
	$('.countdown').downCount({
		date: '05/10/2022 12:00:00',
		offset: -4
	}, function () {
		
	});

	if ($(window).width() < 600) {
		$(".catalog__container-items-box").removeClass("strock")
		$(".catalog__container-items-box").addClass("plit")
		$(".catalog__container-categ-top-ps-s").click(function() {
			$(this).addClass("active")
			$(".catalog__container-categ-top-ps-p").removeClass("active")
			$(".catalog__container-items-box").removeClass("strock")
			$(".catalog__container-items-box").addClass("plit")
		});	
		
		$(".catalog__container-categ-top-ps-p").click(function() {
			$(this).addClass("active")
			$(".catalog__container-categ-top-ps-s").removeClass("active")
			$(".catalog__container-items-box").removeClass("strock")
			$(".catalog__container-items-box").addClass("plit")
		});	
	}

	$('.form21').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				name: {
					required: true,
				},
				phone: {
					required: true,	
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						$(".thanx-trigger").trigger("click");
					}
				});
			},  
         });
	 });

	$('.form321').each(function() {
        var it = $(this);
         it.validate({
			rules: {
				phone: {
					required: true,	
				}
			},

			errorPlacement: function (error, element) {
			},

			submitHandler: function() {
				$.ajax({
					success: function(){
						$(".thanx-trigger").trigger("click");
					}
				});
			},  
         });
	 });

	 $(".ymap").each(function(e){
        var ya = this;
        var myMap;
        ymaps.ready(
            function() {
                var x = $(ya).attr("data-x");
                var y = $(ya).attr("data-y");
                    myMap = new ymaps.Map($(ya)[0], {
                        center: [x , y],
                        zoom: 13,
						controls: ['fullscreenControl']						
                    }, {
                        searchControlProvider: 'yandex#search'
                    });
            
                    var myPlacemark = new ymaps.Placemark([x, y], {},
                { iconLayout: 'default#image',
                iconImageHref: 'static/img/content/marker.svg',
                iconImageSize: [37, 37], });    
            
				myMap.geoObjects.add(myPlacemark);

				var ctrlKey = false;
				var ctrlMessVisible = false;
				var timer;
				myMap.behaviors.disable('scrollZoom');
				// myMap.behaviors.disable('scrollZoom');
				myMap.events.add(['wheel', 'mousedown'], function(e) {
					if (e.get('type') == 'wheel') {
						if (!ctrlKey) { // Ctrl не нажат, показываем уведомление
							$('#ymap_ctrl_display').fadeIn(300);
							ctrlMessVisible = true;
							clearTimeout(timer); // Очищаем таймер, чтобы продолжать показывать уведомление
							timer = setTimeout(function() {
								$('#ymap_ctrl_display').fadeOut(300);
								ctrlMessVisible = false;
							}, 1500);
						}
						else { // Ctrl нажат, скрываем сообщение
							$('#ymap_ctrl_display').fadeOut(100);
						}
					}
					if (e.get('type') == 'mousedown' && ctrlMessVisible) { // Скрываем уведомление при клике на карте
						$('#ymap_ctrl_display').fadeOut(100);
					}
				});
				// Обрабатываем нажатие на Ctrl
				$(document).keydown(function(e) {
					if (e.which === 17 && !ctrlKey) { // Ctrl нажат: включаем масштабирование мышью
						ctrlKey = true;
						myMap.behaviors.enable('scrollZoom');
					}
				});
				$(document).keyup(function(e) { // Ctrl не нажат: выключаем масштабирование мышью
					if (e.which === 17) {
						ctrlKey = false;
						myMap.behaviors.disable('scrollZoom');
					}
				});
            }
        );
		
	})


	var af__swiper = new Swiper('.af__swiper', {
		slidesPerView: "auto",
        spaceBetween: 30,
		navigation: {
			nextEl: ".swiper-button-next.adsbh",
			prevEl: ".swiper-button-prev.adsbh",
		  },
		breakpoints: {
			600: {
			  slidesPerView: 1,
			  spaceBetween: 30,
			},
			820: {
			  slidesPerView: 2,
			  spaceBetween: 30,
			},
		},
	  });


	$('.phone-mask').mask("+ 7 000 000 00 00");

	// ПОПАП
	$(".kons-blur").click(function() {
		$(".kons").addClass("hide")
		$("body, html").css("overflow","auto")
		$("body, html").css("overflow-x","hidden")
	})
	$(".kons-popup-close").click(function() {
		$(".kons").addClass("hide")
		$("body, html").css("overflow","auto")
		$("body, html").css("overflow-x","hidden")
	})
	$(".ppbtn").click(function() {
		$(".kons").removeClass("hide")
		$("body, html").css("overflow","hidden")
	})


	// ЛИПКИЕ КАТЕГОРИИ

	if ($(window).width() < 1200) {
		$(".dpls").removeClass("stick-next-to")
		$(".dprs").removeClass("sticky-wrapper")
		$(".dprss").removeClass("sticky")
	}
	if ($(window).width() < 1020) {
		$(".double__page-left").removeClass("stick-next-to")
		$(".double__page-right").removeClass("sticky-wrapper")
		$(".double__page-right-s").removeClass("sticky")
	}
	if ($(window).width() < 820) {
		$(".catalog__container-items").removeClass("stick-next-to")
		$(".catalog__container-categ").removeClass("sticky-wrapper")
		$(".catalog__container-categ-box").removeClass("sticky")
	}

	function stickySidebar(mainBlk, sidebarWrapper, sidebarBlk) {

		var main = $(mainBlk); //Our sticky block will scroll next to this one
		
		var stickyWrapper = $(sidebarWrapper); // General position relative wrapper for main and sticky block
	
		var stickyBlk = $(sidebarBlk); // Our sticky block
	
		var startPos = stickyBlk.offset().top; // Starting position where the block should stick
	
		var finishPos = main.height() - stickyBlk.innerHeight(); // Starting position where the block should stick
		
		stickyWrapper.height(main.height()); // Set height of sticky wrapper equal to the height of main block that we are scrolling next to
	
		$(window).scroll(function(){ 
		  var currentScrollPos = $(document).scrollTop();  // Get current position of scroll
		  
		  if ((currentScrollPos > startPos) && (currentScrollPos <= finishPos)) { // Check if current scroll position is in range of main block height, add class stuck
			stickyBlk.removeClass('bottom');
			stickyBlk.addClass('stuck');
		  }
		  else if (currentScrollPos > finishPos) {
			stickyBlk.removeClass('stuck');
			stickyBlk.addClass('bottom');
		  }  // if block current scroll is further, add class bottom
		  else {
			stickyBlk.removeClass('stuck');
			stickyBlk.removeClass('bottom');
		  } // in other cases do nothing
		});
		$(".double__page-left-bottom-more").click(function() {
			
			var main = $(mainBlk); //Our sticky block will scroll next to this one
			
			var stickyWrapper = $(sidebarWrapper); // General position relative wrapper for main and sticky block
		
			var stickyBlk = $(sidebarBlk); // Our sticky block
		
			var finishPos = main.height() - stickyBlk.innerHeight(); // Starting position where the block should stick

			stickyWrapper.height(main.height()); // Set height of sticky wrapper equal to the height of main block that we are scrolling next to
		
			$(window).scroll(function(){ 
			var currentScrollPos = $(document).scrollTop();  // Get current position of scroll
			
			if ((currentScrollPos > startPos) && (currentScrollPos <= finishPos)) { // Check if current scroll position is in range of main block height, add class stuck
				stickyBlk.removeClass('bottom');
				stickyBlk.addClass('stuck');
			}
			else if (currentScrollPos > finishPos) {
				stickyBlk.removeClass('stuck');
				stickyBlk.addClass('bottom');
			}  // if block current scroll is further, add class bottom
			else {
				stickyBlk.removeClass('stuck');
				stickyBlk.removeClass('bottom');
			} // in other cases do nothing
			});

			stickyBlk.addClass('stuck');
			stickyBlk.removeClass('bottom');

		});	
	};

	stickySidebar ('.stick-next-to', '.sticky-wrapper', '.sticky');

	if ($(window).width() < 1200) {
		$(".dpls").removeClass("stick-next-to")
		$(".dprs").removeClass("sticky-wrapper")
		$(".dprss").removeClass("sticky")
	}
	if ($(window).width() < 1020) {
		$(".double__page-left").removeClass("stick-next-to")
		$(".double__page-right").removeClass("sticky-wrapper")
		$(".double__page-right-s").removeClass("sticky")
	}
	if ($(window).width() < 820) {
		$(".catalog__container-items").removeClass("stick-next-to")
		$(".catalog__container-categ").removeClass("sticky-wrapper")
		$(".catalog__container-categ-box").removeClass("sticky")
	}

	// if ($(window).width() < 820) {
	// 	$(".catalog__container-items").removeClass("stick-next-to")
	// 	$(".catalog__container-categ").removeClass("sticky-wrapper")
	// 	$(".catalog__container-categ-box").removeClass("sticky")
	// }

	// function stickySidebar(mainBlk, sidebarWrapper, sidebarBlk) {

	// 	var main = $(mainBlk); //Our sticky block will scroll next to this one
		
	// 	var stickyWrapper = $(sidebarWrapper); // General position relative wrapper for main and sticky block
	
	// 	var stickyBlk = $(sidebarBlk); // Our sticky block
	
	// 	var startPos = stickyBlk.offset().top; // Starting position where the block should stick
	
	// 	var finishPos = main.height() - stickyBlk.innerHeight(); // Starting position where the block should stick
	
	// 	stickyWrapper.height(main.height()); // Set height of sticky wrapper equal to the height of main block that we are scrolling next to
	
	// 	$(window).scroll(function(){ 
	// 	  var currentScrollPos = $(document).scrollTop();  // Get current position of scroll
		  
	// 	  if ((currentScrollPos > startPos) && (currentScrollPos <= finishPos)) { // Check if current scroll position is in range of main block height, add class stuck
	// 		stickyBlk.removeClass('bottom');
	// 		stickyBlk.addClass('stuck');
	// 	  }
	// 	  else if (currentScrollPos > finishPos) {
	// 		stickyBlk.removeClass('stuck');
	// 		stickyBlk.addClass('bottom');
	// 	  }  // if block current scroll is further, add class bottom
	// 	  else {
	// 		stickyBlk.removeClass('stuck');
	// 		stickyBlk.removeClass('bottom');
	// 	  } // in other cases do nothing
	// 	});
	
	// };
	
	// stickySidebar ('.stick-next-to', '.sticky-wrapper', '.sticky');
	
	// if ($(window).width() < 820) {
	// 	$(".catalog__container-items").removeClass("stick-next-to")
	// 	$(".catalog__container-categ").removeClass("sticky-wrapper")
	// 	$(".catalog__container-categ-box").removeClass("sticky")
	// }


	// ЛИПКАЯ АФИША РАСПИСАНИЕ

	if ($(window).width() < 1200) {
		$(".double__page-left").removeClass("stick-next-to-r")
		$(".double__page-right").removeClass("sticky-wrapper-r")
		$(".double__page-right-s").removeClass("sticky-r")
	}

	function stickySidebarR(mainBlk, sidebarWrapper, sidebarBlk) {

		var main = $(mainBlk); //Our sticky block will scroll next to this one
		
		var stickyWrapper = $(sidebarWrapper); // General position relative wrapper for main and sticky block
	
		var stickyBlk = $(sidebarBlk); // Our sticky block
	
		var startPos = stickyBlk.offset().top; // Starting position where the block should stick
	
		var finishPos = main.height() - stickyBlk.innerHeight(); // Starting position where the block should stick
	
		stickyWrapper.height(main.height()); // Set height of sticky wrapper equal to the height of main block that we are scrolling next to
	
		$(window).scroll(function(){ 
		  var currentScrollPos = $(document).scrollTop();  // Get current position of scroll
		  
		  if ((currentScrollPos > startPos) && (currentScrollPos <= finishPos)) { // Check if current scroll position is in range of main block height, add class stuck
			stickyBlk.removeClass('bottom');
			stickyBlk.addClass('stuck');
		  }
		  else if (currentScrollPos > finishPos) {
			stickyBlk.removeClass('stuck');
			stickyBlk.addClass('bottom');
		  }  // if block current scroll is further, add class bottom
		  else {
			stickyBlk.removeClass('stuck');
			stickyBlk.removeClass('bottom');
		  } // in other cases do nothing
		});
		$(".double__page-left-bottom-more").click(function() {
			
			var main = $(mainBlk); //Our sticky block will scroll next to this one
			
			var stickyWrapper = $(sidebarWrapper); // General position relative wrapper for main and sticky block
		
			var stickyBlk = $(sidebarBlk); // Our sticky block
		
			var finishPos = main.height() - stickyBlk.innerHeight(); // Starting position where the block should stick
		
			stickyWrapper.height(main.height()); // Set height of sticky wrapper equal to the height of main block that we are scrolling next to
		
			$(window).scroll(function(){ 
			var currentScrollPos = $(document).scrollTop();  // Get current position of scroll
			
			if ((currentScrollPos > startPos) && (currentScrollPos <= finishPos)) { // Check if current scroll position is in range of main block height, add class stuck
				stickyBlk.removeClass('bottom');
				stickyBlk.addClass('stuck');
			}
			else if (currentScrollPos > finishPos) {
				stickyBlk.removeClass('stuck');
				stickyBlk.addClass('bottom');
			}  // if block current scroll is further, add class bottom
			else {
				stickyBlk.removeClass('stuck');
				stickyBlk.removeClass('bottom');
			} // in other cases do nothing
			});

			stickyBlk.addClass('stuck');
			stickyBlk.removeClass('bottom');

		});	
	};

	stickySidebarR ('.stick-next-to-r', '.sticky-wrapper-r', '.sticky-r');

	if ($(window).width() < 1200) {
		$(".double__page-left").removeClass("stick-next-to")
		$(".double__page-right").removeClass("sticky-wrapper")
		$(".double__page-right-s").removeClass("sticky")
	}

})