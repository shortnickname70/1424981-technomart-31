const arrowRight = document.querySelector('.drill-slide-label-arrow');
const arrowLeft = document.querySelector('.perf-slide-label-arrow');
const drillRadio = document.querySelector('#drill-slide');
const perfRadio = document.querySelector('#perf-slide');

const drillSlideDot = document.querySelector('.drill-slide-label');
const perfSlideDot = document.querySelector('.perf-slide-label');

arrowRight.addEventListener('click', function(evt) {
    drillRadio.setAttribute('checked', true);
    perfRadio.setAttribute('checked', false);
});

arrowLeft.addEventListener('click', function(evt) {
    perfRadio.setAttribute('checked', true);
    drillRadio.setAttribute('checked', false);
});

drillSlideDot.addEventListener('click', function(evt) {
    drillRadio.setAttribute('checked', true);
    perfRadio.setAttribute('checked', false);
});

perfSlideDot.addEventListener('click', function(evt) {
    perfRadio.setAttribute('checked', true);
    drillRadio.setAttribute('checked', false);
});