const arrowRight = document.querySelector('.drill-slide-label-arrow');
const arrowLeft = document.querySelector('.perf-slide-label-arrow');

const drillRadio = document.querySelector('#drill-slide');
const perfRadio = document.querySelector('#perf-slide');

const drillSlideDot = document.querySelector('.drill-slide-label');
const perfSlideDot = document.querySelector('.perf-slide-label');

const perfSliderItem = document.querySelector('.slider-perf');
const drillSliderItem = document.querySelector('.slider-drill');

arrowRight.addEventListener('click', function(evt) {
    perfSliderItem.classList.add('hide-slide');
    perfSliderItem.classList.remove('show-slide');
    drillSliderItem.classList.add('show-slide');
    drillSliderItem.classList.remove('hide-slide');
    perfSlideDot.classList.remove('show-perf-dot');
    drillSlideDot.classList.add('show-drill-dot');

    
});

arrowLeft.addEventListener('click', function(evt) {
    perfSliderItem.classList.add('show-slide');
    perfSliderItem.classList.remove('hide-slide');
    drillSliderItem.classList.add('hide-slide');
    drillSliderItem.classList.remove('show-slide');

    perfSlideDot.classList.add('show-perf-dot');
    drillSlideDot.classList.remove('show-drill-dot');
   
});

drillSlideDot.addEventListener('click', function(evt) {
    perfSliderItem.classList.add('hide-slide');
    perfSliderItem.classList.remove('show-slide');
    drillSliderItem.classList.add('show-slide');
    drillSliderItem.classList.remove('hide-slide');

    perfSlideDot.classList.remove('show-perf-dot');
    drillSlideDot.classList.add('show-drill-dot');

  });

perfSlideDot.addEventListener('click', function(evt) {
    perfSliderItem.classList.add('show-slide');
    perfSliderItem.classList.remove('hide-slide');
    drillSliderItem.classList.add('hide-slide');
    drillSliderItem.classList.remove('show-slide');

    perfSlideDot.classList.add('show-perf-dot');
    drillSlideDot.classList.remove('show-drill-dot');


});