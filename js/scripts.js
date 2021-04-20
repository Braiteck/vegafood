$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Наши бренды
	if ($('.brands .swiper-container').length) {
		new Swiper('.brands .swiper-container', {
			loop: true,
			speed: 500,
			spaceBetween: 20,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 5
				},
				1280: {
					slidesPerView: 7
				}
			}
		})
	}


	// Акции
	if ($('.stocks .swiper-container').length) {
		new Swiper('.stocks .swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 53,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						setHeight($(swiper.$el).find('.name'))
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.name').height('auto')
						setHeight($(swiper.$el).find('.name'))
					})
				}
			}
		})
	}


	// Товары
	if ($('.products .swiper-container:not(.big)').length) {
		new Swiper('.products .swiper-container:not(.big)', {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), swiper.slides.length)

						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), swiper.slides.length)

						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	if ($('.products .swiper-container.big').length) {
		new Swiper('.products .swiper-container.big', {
			loop: false,
			speed: 500,
			spaceBetween: 20,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), swiper.slides.length)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						productHeight($(swiper.$el), swiper.slides.length)
					})
				}
			}
		})
	}


	// Слайдер в тексте
	if ($('.text_block .slider.swiper-container').length) {
		new Swiper('.text_block .slider.swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})
	}


	// Карусель в тексте
	if ($('.text_block .carousel.swiper-container').length) {
		new Swiper('.text_block .carousel.swiper-container', {
			loop: true,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 25,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 54,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let thumbH = $(swiper.$el).find('.thumb').outerHeight()

						$(swiper.$el).find('.swiper-button-prev').css('top', thumbH / 2)
						$(swiper.$el).find('.swiper-button-next').css('top', thumbH / 2)
					})
				}
			}
		})
	}


	// Товар в избравнное
	$('.product .favorite_btn, .product_info .favorite_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в корзину
	$('.product .buy_btn, .product_info .buy_btn').click(function (e) {
		e.preventDefault()

		if ($(this).hasClass('active')) {
			$(this).toggleClass('active')
		} else {
			$(this).toggleClass('active')

			$.fancybox.open({
				src: '#add_to_cart_success',
				type: 'inline',
				touch: false,
				afterShow: () => {
					setTimeout(() => { $.fancybox.close() }, 2000)
				}
			})
		}
	})


	// Календарь
	$('.date_input_inline').datepicker({
		inline: true,
		minDate: new Date()
	})

	$('.date_input').datepicker({
		autoClose: true
	})


	// Боковая колонка - фильтр
	$('aside .mob_filter_btn').click(function (e) {
		e.preventDefault()

		!$(this).hasClass('active')
			? $(this).addClass('active').next().slideDown(300)
			: $(this).removeClass('active').next().slideUp(200)
	})


	const priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 6000,
		from: 150,
		to: 3000,
		step: 5,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())

			let offsetTop = $('.filter .price_range').position().top
			$('.filter .submit_btn').css('top', offsetTop + 'px').addClass('show in_price')
		}
	}).data("ionRangeSlider")

	$('.filter .price_range .input').keyup(() => {
		priceRange.update({
			from: parseFloat($('.filter .price_range input.from').val().replace(/\s+/g, '')),
			to: parseFloat($('.filter .price_range input.to').val().replace(/\s+/g, ''))
		})

		let offsetTop = $('.filter .price_range').position().top
		$('.filter .submit_btn').css('top', offsetTop + 'px').addClass('show in_price')
	})


	$('.filter label').click(function (e) {
		let _self = $(this)

		setTimeout(() => {
			let offsetTop = _self.position().top

			$('.filter .submit_btn').css('top', offsetTop + 'px').addClass('show').removeClass('in_price')
		})
	})


	$('.filter .reset_btn').click(function () {
		$('.filter input').removeAttr('checked')
		$('.filter .submit_btn').removeClass('show in_price')

		$priceRange.reset()
	})


	// Страница товара
	if ($('.product_info .images').length) {
		const productSlider = new Swiper('.product_info .big .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				slideChange: swiper => {
					console.log(swiper)
					setTimeout(() => {
						$('.product_info .images .thumbs button').removeClass('active')
						$('.product_info .images .thumbs button').eq(swiper.activeIndex).addClass('active')
					})
				}
			}
		})

		$('.product_info .images .thumbs button').click(function (e) {
			e.preventDefault()

			productSlider.slideTo($(this).data('slide-index'), 500)
		})
	}


	$('.product_info .mob_composition_btn, .product_info .mob_daily_norm_btn').click(function (e) {
		e.preventDefault()

		!$(this).hasClass('active')
			? $(this).addClass('active').next().slideDown(300)
			: $(this).removeClass('active').next().slideUp(200)
	})


	// Оформление заказа
	$('.cart_info .auth .methods .login_btn').click(function (e) {
		e.preventDefault()

		$('.cart_info .auth .register, .cart_info .auth .quike_buy').hide()
		$('.cart_info .auth .login').fadeIn(300)
	})

	$('.cart_info .auth .methods .register_btn').click(function (e) {
		e.preventDefault()

		$('.cart_info .auth .login, .cart_info .auth .quike_buy').hide()
		$('.cart_info .auth .register').fadeIn(300)
	})

	$('.cart_info .auth .methods .quike_buy_btn').click(function (e) {
		e.preventDefault()

		$('.cart_info .auth .register, .cart_info .auth .login').hide()
		$('.cart_info .auth .quike_buy').fadeIn(300)
	})


	$('.cart_info .checkout .item .head').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		!parent.hasClass('active')
			? parent.toggleClass('active').find('.data').slideDown(300)
			: parent.toggleClass('active').find('.data').slideUp(200)
	})
})



$(window).on('load', () => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})


	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// Залипание элемента при скролле
	$('.sticky').stick_in_parent({
		offset_top: 154
	})
})



$(window).resize(() => {
	// Выравнивание элементов в сетке
	$('.products .row').each(function () {
		productHeight($(this), parseInt($(this).css('--products_count')))
	})


	// Фикс. шапка
	headerInit = false
	$('.header_wrap').height('auto')

	setTimeout(() => {
		headerInit = true
		headerHeight = $('header').outerHeight()

		$('.header_wrap').height(headerHeight)

		headerInit && $(window).scrollTop() > headerHeight
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}, 100)
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



// Выравнивание товаров
function productHeight(context, step) {
	let start = 0,
		finish = step,
		$products = context.find('.product')

	$products.find('.name').height('auto')

	$products.each(function () {
		setHeight($products.slice(start, finish).find('.name'))

		start = start + step
		finish = finish + step
	})
}