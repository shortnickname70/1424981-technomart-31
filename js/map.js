// const mapLink = document.querySelector(".contacts-button-map");
// const mapPopup = document.querySelector(".modal-map");
// const mapClose = mapPopup.querySelector(".modal-close");

const modalMap = document.querySelector('.map-modal-wrapper')
const map = document.querySelector('.map-iframe');
const mapCloseButton = document.querySelector('.map-modal-close-button');

map.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalMap.classList.add('map-modal-show');

});

mapCloseButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("map-modal-show");
 
  });