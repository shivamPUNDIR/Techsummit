// ---------------------------------------------------------------------
// Scripts
// Authors: Andrew Ross & a little help from my friends
// ---------------------------------------------------------------------
var AROSSMN = AROSSMN || {};

(function($, APP) {

    $(function() {
        APP.App.init();
        APP.Header.init();
        APP.Viewport.init();
        APP.Universe.init();
        APP.ClickFunctions.init();
        APP.ScrollTo.init();
        APP.Tabs.init();
		APP.Faqs.init();
		APP.Filter.init();
    });

// ---------------------------------------------------------------------
// Browser and Feature Detection
// ---------------------------------------------------------------------
APP.App = {
    userAgent: undefined,
    html: undefined,

    init: function() {
		APP.Features = APP.Features || {};
        this.userAgent = navigator.userAgent.toLowerCase();
        this.html = $('html');
        this.setup();
        this.detections();
    },

	setup: function() {
		$('body').removeClass('page-loading no-js').addClass('page-loaded');
	},

	detections: function() {
		if ( ! ('ontouchstart' in window) ) {
            this.html.addClass('noTouch');
        }
		if ( 'ontouchstart' in window ) {
            this.html.addClass('isTouch');
        }
		if ( 'ontouchstart' in window ) {
            this.html.addClass('isTouch');
        }
		if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            if(navigator.appVersion.indexOf('Trident') === -1) {
                this.html.addClass('isEDGE');
            } else {
                this.html.addClass('isIE isIE11');
            }
        }
		if( navigator.appVersion.indexOf("MSIE") !== -1 ) {
            this.html.addClass('isIE');
        }
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            this.html.addClass('isSafari');
        }
	}
};


// ---------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------

APP.Header = {

    init: function() {
		var header = $('.site-header'),
			w = $(window),
			lastScrollTop = 0;

		function headerSize() {
			var st = w.scrollTop();
			if ( w.scrollTop() >= 180 ){
				header.addClass('is-scrolling-down');
			} else {
				header.removeClass('is-scrolling-down');
			}
			lastScrollTop = st;
        }

        w.on("load resize scroll",function(e){
			headerSize();
        });

		$(document).ready(function() {
			var burger = $('.mobile-menu-trigger'),
				mask = $('.screen');

			$('.mobile-menu-trigger, .screen').click(function(){
				if(burger.hasClass('is-active')) {
				  	burger.removeClass('is-active');
					mask.fadeOut(300);
				    $('body').removeClass('menu-is-active');
				  } else {
				  	mask.fadeIn(300);
					burger.addClass('is-active');
				    $('body').addClass('menu-is-active');
				  }
			});
        });
    }
};


// ---------------------------------------------------------------------
// Detect if element is in the viewport
// ---------------------------------------------------------------------

APP.Viewport = {

    init: function() {

        $.fn.isOnScreen = function(){
			var elementTop = $(this).offset().top,
				elementBottom = elementTop + $(this).outerHeight(),
				viewportTop = $(window).scrollTop(),
				viewportBottom = viewportTop + $(window).height();
			return elementBottom > viewportTop && elementTop < viewportBottom;
		};

		function detection() {
			for(var i = 0; i < items.length; i++) {
				var el = $( items[i] );

				if( el.isOnScreen() ){
					el.addClass('in-view');
				} else {
                    el.removeClass('in-view');
                }
			}
		}

		var items = document.querySelectorAll('*[data-animate-in], *[data-detect-viewport]'),
            waiting = false,
            w = $(window);

		w.on("resize scroll", function(){
			if (waiting) {
		        return;
		    }
			waiting = true;
			detection();

			setTimeout(function () {
		        waiting = false;
		    }, 100);
		});

		$(document).ready(function(){
            setTimeout(function(){
                detection();
            }, 500);

			for(var i = 0; i < items.length; i++) {
				var d = 0,
					el = $( items[i] );
				if( items[i].getAttribute('data-animate-in-delay') ) {
					d = items[i].getAttribute('data-animate-in-delay') / 1000 + 's';
				} else {
					d = 0;
				}
				el.css('transition-delay', d);
			}
		});
    }
};


// ---------------------------------------------------------------------
// Shooting Stars
// ---------------------------------------------------------------------

APP.Universe = {

    init: function() {
		if( $('.gradient, .shooting-star, .stars').length ) {
			this.stars();
        } else {
            return;
        }
	},

	stars: function() {

        $('.gradient').append("<span class='bg-orange bg-gradient'></span><span class='bg-purple bg-gradient'></span><span class='bg-blue bg-gradient'></span>");

        var gradient = $('.gradient'),
			colors = $('.bg-gradient'),
			active =  Math.round(Math.random() * 2),
			pause = 6000,
			count = colors.length,
			i = 0;

		colors.eq(active).addClass('is-active initial');
		setTimeout(transition,pause);
		function transition(){
			colors.eq(i).removeClass('is-active initial');
			if( ++i >= count ){
				i = 0;
			}
			colors.eq(i).addClass('is-active');
			setTimeout(transition, pause);
		}

		function shootingStar(that, dir) {
            setInterval(function(){
                var topPos = Math.floor(Math.random() * 80) + 1,
					topPos = topPos + '%',
					leftPos = Math.floor(Math.random() * 40) + 1,
					leftPos = leftPos + '%',
					trans = Math.floor(Math.random() * 300) + 1,
					trans = trans + 'deg';
                that.css({
				    'top': topPos,
				    dir: leftPos,
					transform: 'rotate(' + trans + ')'
				});
            }, 2000);
		}

        $('.shooting-star').each(function(){
			var el = $(this);
			shootingStar(el, 'left');
        });

		$('.shooting-star-right').each(function(){
			var el = $(this);
			shootingStar(el, 'right');
        });
	}
};


// ---------------------------------------------------------------------
// Click Functions
// ---------------------------------------------------------------------

APP.ClickFunctions = {

    init: function() {
		if( $('*[data-click-target], .modal').length ) {
			this.bind();
        } else {
            return;
        }
	},

	bind: function() {

        function getSessionModal(el) {
            var s = el,
                target = s.find('.session-title').attr('data-click-target'),
                modal = $('.modal-wrap'),
                description = s.find('.talk-description').html(),
                session = s.find('.session-title').text(),
                speaker = s.find('.session-speaker').text(),
                speakerProfiles = s.find('.speaker-profile');

            // Modal Base Info
            modal.attr('id', target);
            modal.find('.talk-description').text(description);
            modal.find('.talk-title').text(session);
            $('.speaker-profiles').empty();

            if( speaker.length > 0 ){
                $('.talk-speaker').text(speaker);
                $('.talk-speaker-wrap').removeClass('is-hidden');
            } else {
                $('.talk-speaker-wrap').addClass('is-hidden');
            }

            //Add Speaker Profiles
            speakerProfiles.each(function(){
                var el = $(this),
                    imgSrc = el.find('.img-path').text();
                    el.find('.speaker-image img').attr('src', imgSrc);

                var c = el.clone();
                $('.speaker-profiles').append(c);
            });

            if(speakerProfiles.length === 0) {
                $('.speaker-profile').hide();
            } else {
                $('.speaker-profile').show();
            }
        }


        function getSpeakerModal(el) {
            var s = el,
                target = s.attr('data-click-target'),
                modal = $('.modal-wrap'),
                speakerProfile = s.find('.speaker');

            $('.modal__inner').empty();
            modal.attr('id', target);

            var el = speakerProfile,
                imgSrc = el.find('.img-path').text();
                el.find('.speaker-image img').attr('src', imgSrc);

            var c = el.clone();
            $('.modal__inner').append(c);
        }


		$('*[data-click-target]').click(function(){
            if( $(this).hasClass('session-title') ) {
                var el = $(this).parents('.session');
                getSessionModal(el);
            }
            if( $(this).hasClass('speaker-preview')) {
                var el = $(this);
                getSpeakerModal(el);
            }

            var trigger = $(this).attr('data-click-target'),
            	bodyCls = $(this).attr('data-click-bodyClass'),
            	target = $("#" + trigger),
				mask = target.find('.modal-screen');

            history.replaceState(null, '', '#' + trigger);

            if( target.hasClass('is-active') ) {
                target.removeClass('is-active');
                history.replaceState(null, '', ' ');
            } else {
               target.addClass('is-active');
            }

            // Check for additional body class
            if( $(this).attr('data-click-bodyClass') ) {
                if( $('body').hasClass(bodyCls) ) {
                    $('body').removeClass(bodyCls);
                } else {
                   $('body').addClass(bodyCls);
                }
            }
        });


		$('.modal-screen, .modal__close').click(function(){
			$('body').removeClass('modal-is-active');
			$('.modal-wrap').removeClass('is-active');
			history.replaceState(null, '', ' ');
            $('.speaker-profiles').empty();
            $('.speaker-profiles .speaker-image img').attr('src', '');
		});

        $(document).ready(function(){
            var hash = window.location.hash.replace('#', '');

            $('.session-title').each(function(){
                var modalId = $(this).attr('data-click-target'),
                    el = $(this).parent('.session');

                if(modalId === hash && modalId != '') {
                    getSessionModal(el);
                    var modal = $('#' + modalId);
                    modal.addClass('is-active');
                    $('body').addClass('modal-is-active');
                    $('html, body').animate({
                        scrollTop: el.offset().top
                    }, 0 );
                }
            });
            $('.speaker-preview').each(function(){
                var modalId = $(this).attr('data-click-target'),
                    el = $(this);

                if(modalId === hash && modalId != '') {
                    getSpeakerModal(el);
                    var modal = $('#' + modalId);
                    modal.addClass('is-active');
                    $('body').addClass('modal-is-active');
                    $('html, body').animate({
                        scrollTop: el.offset().top
                    }, 0 );
                }
            });
        });
	}
};


// ---------------------------------------------------------------------
// Click Functions
// ---------------------------------------------------------------------

APP.ScrollTo = {

    init: function() {
		if( $('*[data-scroll-to]').length ) {
			this.bind();
        } else {
            return;
        }
	},

	bind: function() {
		$('*[data-scroll-to]').on('click touchstart:not(touchmove)', function(e) {
			e.preventDefault();

            var trigger = $(this).attr('data-scroll-to'),
                target = $("#" + trigger),
                ss = 1000, //scroll speed
                o = 0; // offset

            if( $(this).attr('data-scroll-speed') ) {
                ss = $(this).attr('data-scroll-speed');
            }

            if( $(this).attr('data-scroll-offset') ) {
                o = $(this).attr('data-scroll-offset');
            }

            $('html, body').animate({
                scrollTop: target.offset().top - o
            }, ss);
        });
	}
};


// ---------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------

APP.Tabs = {

    init: function() {
		if( $('.tabs').length ) {
			this.bind();
        } else {
            return;
        }
	},

	bind: function() {
		var tab = $('[data-tabs-tab]'),
        tabBody = $('[data-tabs-body]');

        tab.on('click touchstart:not(touchmove)', function() {
            var activeTab = $(this).attr('data-tabs-tab');

            tab.removeClass('is-active');
            $(this).addClass('is-active');

            tabBody.each(function() {
                var el = $(this),
                    player = $(this).find('[data-ustream]'),
                    playerID = player.data('ustream');

                if( el.attr('data-tabs-body') == activeTab ) {
                    if(el.hasClass('tabs-bg')){
                        el.addClass('is-active');
                    } else {
                        el.fadeIn(100).addClass('is-active');
                    }

                    // If it has a Ustream player
                    if (player) {
                      player.append('<iframe src="https://www.ustream.tv/embed/'+ playerID +'?html5ui&autoplay=false" class="Ustream" style="border: 0 none transparent;" webkitallowfullscreen allowfullscreen frameborder="no" width="720" height="405"></iframe>');
                    }
                } else {
                    if(el.hasClass('tabs-bg')){
                        el.removeClass('is-active');
                    } else {
                        el.hide().removeClass('is-active');
                    }

                    // If it has a Ustream player
                    if (player) {
                      player.empty();
                    }
                }
            });
        }); // End click
	}
};



// ---------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------

APP.Faqs = {

    init: function() {
		if( $('.faq').length ) {
			this.bind();
        } else {
            return;
        }
	},

	bind: function() {
		$('.faq__answer').slideUp();

		$('.faq__question, .faq__close').click(function(){
			var el = $(this).parents('.faq'),
				question = el.find('.faq__answer');

			if( el.hasClass('is-active') ){
				el.removeClass('is-active');
				question.slideUp(500);
			} else {
				el.addClass('is-active');
				question.slideDown(500);
			}
		});
	}
};


// ---------------------------------------------------------------------
// Filter
// ---------------------------------------------------------------------

APP.Filter = {

    init: function() {
		if( $('.filter-form').length ) {
	        this.bind();
        } else {
            return;
        }
	},

	bind: function() {

		var session = $('*[data-tags]'),
			slot = $('.slot'),
			tagFilter = $('.tag-filter'),
			stageFilter = $('.stage-filter'),
			schedule = $('.schedule'),
			activeStages = [],
			activeTags = [];

		session.addClass('active-stage is-active');

		function timeSlots() {
			if (activeStages.length <= 0) {
				session.addClass('active-stage');
				slot.removeClass('no-matched-sessions');
			}

			slot.each(function(){
				var activeSlot = $(this),
					kids = $(this).find('.session'),
					activeCount = 0;

				kids.each(function(){
					if( $(this).hasClass('is-active') && $(this).hasClass('active-stage') ) {
						activeCount++;
					}
				});

				if (activeCount >= 1) {
					activeSlot.removeClass('no-matched-sessions');
				} else {
					activeSlot.addClass('no-matched-sessions');
				}
			});

			if (activeTags.length <= 0 && activeStages.length <= 0) {
				session.removeClass('in-active').addClass('is-active');
				slot.removeClass('no-matched-sessions');
			}
			var filterCount = $('.session.is-active.active-stage').length;
			$('.filter-count').text(filterCount);
		}

		stageFilter.click(function() {
			var filter = $(this),
				stage = filter.attr('data-stage-filter'),
				stageClass = 'active-stage-' + stage;

			if(filter.hasClass('in-active')){
				filter.removeClass('in-active');
				schedule.addClass(stageClass);
				activeStages.push(stage);

			} else {
				filter.addClass('in-active');
				schedule.removeClass(stageClass);
				var index = activeStages.indexOf(stage);
				activeStages.splice(index, 1);
			}

			session.each(function(){
				var s = $(this),
					ss = $(this).attr('data-stage'),
                    ssArr = ss.split(', '),
                    length = ssArr.length;

                    while(length--) {
                       if (activeStages.indexOf(ssArr[length])!=-1) {
                           s.addClass('active-stage');
                       } else {
                          s.removeClass('active-stage');
                       }
                    }
			});
			timeSlots();
		});

		tagFilter.click(function() {
			var filter = $(this),
				tag = filter.attr('data-tag-filter');

			if( filter.hasClass('in-active') ){
				filter.removeClass('in-active');
				schedule.addClass(tag);
				activeTags.push(tag);
			} else {
				filter.addClass('in-active');
				var index = activeTags.indexOf(tag);
				activeTags.splice(index, 1);
			}

            session.each(function(){
                var s = $(this),
					tags = $(this).attr('data-tags'),
                    tArr = tags.split(', '),
					length = tArr.length;

                while(length--) {
                   if (activeTags.indexOf(tArr[length])!=-1) {
                       s.addClass('is-active').removeClass('in-active');
                       return
                   } else {
                       s.removeClass('is-active').addClass('in-active');
                   }
                }
            });

            //console.log(activeTags);

			if (activeTags.length <= 0) {
                //console.log('No tags');
				session.removeClass('in-active').addClass('is-active');
			}

			timeSlots();
		});

        $('.js-filter-reset').click(function() {
            $('.filter-count').text('0');
            session.addClass('active-stage is-active').removeClass('in-active');
            slot.removeClass('no-matched-sessions');
            tagFilter.addClass('in-active');
            stageFilter.addClass('in-active');
            schedule.attr('class', 'schedule');
            activeStages = [];
            activeTags = [];
        });

	}
};



}(jQuery, AROSSMN));
