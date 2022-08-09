const popupLinks = document.querySelectorAll(".popup_link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock_padding");
const forms = document.querySelectorAll("form");

for (i = 0; i < forms.length; i++) {
  const form = forms[i];

  let unlock = true;

  const timeout = 800;

  if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const currentPopup = document.getElementById(popupName);
        popupOpen(currentPopup);
        const activeMenu = document.querySelector(".header_menu.active");
        const activeBurger = document.querySelector(".header_burger.active");
        activeMenu.classList.remove("active");
        activeBurger.classList.remove("active");
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll(".close_popup");
  if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
      const el = popupCloseIcon[i];
      el.addEventListener("click", function (e) {
        popupClose(el.closest(".popup"));
        e.preventDefault();
      });
    }
  }

  function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
      const popupActive = document.querySelector(".popup.open");
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }

      currentPopup.classList.add("open");
      currentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup_content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
        bodyUnlock();
      }
    }
    resetFormPopup();
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";

    for (let i; i < lockPadding.length; i++) {
      const el = lockPadding[i];
      el.style.paddingRight = lockPaddingValue;
    }

    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnlock() {
    setTimeout(function () {
      for (let i; i < lockPadding.length; i++) {
        const el = lockPadding[i];
        el.style.paddingRight = "0px";
      }
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      const popupActive = document.querySelector(".popup.open");
      popupClose(popupActive);
    }
  });

  window.addEventListener("resize", function () {
    const clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 1206.98) {
      const activeMenu = document.querySelector(".header_menu.active");
      const activeBurger = document.querySelector(".header_burger.active");
      activeMenu.classList.remove("active");
      activeBurger.classList.remove("active");
      body.classList.remove("lock");
    }
  });

  function resetFormPopup() {
    const test = document.querySelector(".popup");
    if (test.classList.contains(".open")) {
    } else {
      form.reset();
      const formErrors = document.querySelectorAll("._error");

      for (let i = 0; i < formErrors.length; i++) {
        formErrors[i].classList.remove("_error");
      }
    }
  }
}

/////////////////////////////////////////////////////////////////////////

// if (popupLinks.length > 0) {
//   for (let i = 0; i < popupLinks.length; i++) {
//     const popupLink = popupLinks[i];
//     popupLink.addEventListener("click", function (e) {
//       const popupName = popupLink.getAttribute("href").replace("#", "");
//       const currentPopup = document.getElementById(popupName);
//       popupOpen(currentPopup);
//       e.preventDefault();
//     });
//   }
// }

// function popupOpen(currentPopup) {
//   const popupActive = document.querySelector(".popup.open");
//   if (popupActive) {
//     popupClose(popupActive);
//   }

//   currentPopup.classList.add("open");
//   currentPopup.addEventListener("click", function (e) {
//     if (!e.target.closest(".popup_content")) {
//       popupClose(e.target.closest(".popup"));
//     }
//   });
//   body.classList.add("lock");
// }

// function popupClose(popupActive) {
//   popupActive.classList.remove("open");
//   setTimeout(() => {
//     body.classList.remove("lock");
//   }, 800);
// }

// const popupCloseIcon = document.querySelectorAll(".close_popup");
// if (popupCloseIcon.length > 0) {
//   for (let i = 0; i < popupCloseIcon.length; i++) {
//     const el = popupCloseIcon[i];
//     el.addEventListener("click", function (e) {
//       popupClose(el.closest(".popup"));
//       e.preventDefault();
//     });
//   }
// }
