$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count with decimals
    $('.count').each(function () {
		var $this = $(this);
		var target = parseFloat($this.data('target'));
		var decimals = parseInt($this.data('decimals')) || 0;
		$this.text('0');
		var observer = new IntersectionObserver(function(entries) {
			if(entries[0].isIntersecting && !$this.data('counted')) {
				$this.data('counted', true);
				$this.prop('Counter', 0).animate({
					Counter: target
				}, {
					duration: 2500,
					easing: 'swing',
					step: function (now) {
						if(decimals > 0) {
							$this.text(now.toFixed(decimals));
						} else {
							$this.text(Math.floor(now));
						}
					},
					complete: function() {
						if(decimals > 0) {
							$this.text(target.toFixed(decimals));
						} else {
							$this.text(Math.floor(target));
						}
					}
				});
			}
		}, { threshold: 0.5 });
		observer.observe($this[0]);
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
	AOS.init({
		once: true,
	});

    // Artist Modal
    const artistImages = {
        'ati242': ['ati1.png', 'ati2.png', 'ati3.png', 'ati4.png', 'ati5.png', 'ati6.png', 'ati7.png', 'ati8.png'],
        'zara': ['zara1.png', 'zara2.png', 'zara3.png'],
        'ekin': ['ekinuzunlar1.png', 'ekinuzunlar2.png', 'ekinuzunlar3.png', 'ekinuzunlar4.png'],
        'gokhan': ['gokhanturkmen1.png', 'gokhanturkmen2.png', 'gokhanturkmen3.png', 'gokhanturkmen4.png', 'gokhanturkmen5.png'],
        'mustafa': ['mustafaceceli1.png', 'mustafaceceli2.png'],
        'emrefel': ['emrefel1.png', 'emrefel2.png'],
        'emreaydin': ['emreaydin1.png']
    };
    const artistNames = {
        'ati242': 'Ati242',
        'zara': 'Zara',
        'ekin': 'Ekin Uzunlar',
        'gokhan': 'Gökhan Türkmen',
        'mustafa': 'Mustafa Ceceli',
        'emrefel': 'Emre Fel',
        'emreaydin': 'Emre Aydın'
    };

    $('#artistModal').on('show.bs.modal', function (event) {
        const button = $(event.relatedTarget);
        const artist = button.data('artist');
        const modal = $(this);
        const images = artistImages[artist] || [];
        const name = artistNames[artist] || 'Sanatçı';
        
        modal.find('#artistModalLabel').text(name);
        const gallery = modal.find('#artistGallery');
        gallery.empty();
        
        images.forEach(function(img, index) {
            const col = $('<div>').addClass('col-md-4 col-lg-3');
            const imgWrapper = $('<div>').addClass('overflow-hidden rounded-3');
            const imgEl = $('<img>').attr('src', '../assets/images/artists/' + img)
                .attr('alt', name + ' - ' + (index + 1))
                .addClass('img-fluid w-100')
                .css('cursor', 'pointer')
                .on('click', function() {
                    window.open($(this).attr('src'), '_blank');
                });
            imgWrapper.append(imgEl);
            col.append(imgWrapper);
            gallery.append(col);
        });
    });

});

