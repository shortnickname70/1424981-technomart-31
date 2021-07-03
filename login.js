const getlostLink = document.querySelector(".get-lost");
const getlostPopup = document.querySelector(".modal");
const getlostClose = getlostPopup.querySelector(".feedback-modal-close-button");
const getlostForm = getlostPopup.querySelector(".login-form");
const getlostName = getlostPopup.querySelector(".login-name-icon");
const getlostEmail = getlostPopup.querySelector(".login-email-icon");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

getlostLink.addEventListener("click", function (evt) {
 evt.preventDefault();
 getlostPopup.classList.add("modal-show");

 if (storage) {
    getlostName.value = storage;
    getlostEmail.focus();
} else {
    getlostName.focus();
  }
});

getlostClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    getlostPopup.classList.remove("modal-show");
    getlostPopup.classList.remove("modal-error");
  });

  getlostForm.addEventListener("submit", function (evt) {
    if (!getlostName.value || !getlostEmail.value){
    evt.preventDefault();
    getlostPopup.classList.remove("modal-error");
    getlostPopup.offsetWidth = getlostPopup.offsetWidth;
    getlostPopup.classList.add("modal-error");
}else {
    if (isStorageSupport) {
    localStorage.setItem("login", getlostName.value);
}
}
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (getlostPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        getlostPopup.classList.remove("modal-show");
      }
    }
  });