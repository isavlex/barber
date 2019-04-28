import $ from 'jquery';
import slick from 'components/slick/slick';

class Slider {
    constructor(element, breakpoint = false) {
        this.element = element;
        this.breakpoint = breakpoint;
    }

    getSlider() {
        let element = $(this.element);
        if (this.breakpoint) {
            if ($(window).width() <= this.breakpoint) {
                element.not('.slick-initialized').slick({
                    infinite: true,
                    dots: true,
                    speed: 500,
                    arrows: false
                });
            } else if ($(window).width() > this.breakpoint && element.hasClass('slick-initialized')) {
                element.slick('unslick');
            }
        } else {
            element.slick({
                infinite: true,
                dots: true,
                speed: 500,
                appendDots: $('.news__dots'),
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                    }
                }, ]
            });
        }
    }

    sliderInit() {
        if (this.breakpoint) {
            this.getSlider();
            $(window).resize(() => {
                this.getSlider();
            });
        } else {
            this.getSlider();
        }

    }
}



export default Slider;
