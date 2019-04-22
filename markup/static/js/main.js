'use strict';

import sandwichMenu from 'components/navigation/sandwich/sandwich';
// import featuresSlider from 'components/features/slider';
import Slider from './plugins/slider';


sandwichMenu();
// featuresSlider();
svg4everybody({
    nosvg: true, // shiv <svg> and <use> elements and use image fallbacks
    polyfill: true // polyfill <use> elements for External Content
});
let features = new Slider('.features', 559);
features.sliderInit();
let news = new Slider('.news__reviews');
news.sliderInit();

/*
    This file can be used as entry point for webpack!
 */
