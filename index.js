const toggleNavMenu = () => {
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const isMobileNavOpen = document
    .querySelector(".mobile-nav-toggle")
    .getAttribute("aria-expanded");

  if (isMobileNavOpen === "false") {
    mobileNavToggle.setAttribute("aria-expanded", true);
  } else {
    mobileNavToggle.setAttribute("aria-expanded", false);
  }
};

const toggleNavSubmenu = (e) => {
  const isSelected = e.target.getAttribute("aria-selected");
  const selectedIndex = e.target.getAttribute("data-menu-index");

  const navMenuBtns = document.querySelectorAll(".nav-menu-btn");
  const navSubmenus = document.querySelectorAll(".nav-submenu");

  if (isSelected === "true") {
    // set aria-selected of btn to false
    e.target.setAttribute("aria-selected", false);
    // set data-expanded of submenu to false
    navSubmenus[selectedIndex].setAttribute("aria-expanded", false);
  }

  if (isSelected === "false") {
    // set other menu btns aria-selected to false
    navMenuBtns.forEach((btn, index) => {
      if (index === parseInt(selectedIndex)) {
        btn.setAttribute("aria-selected", true);
      } else {
        btn.setAttribute("aria-selected", false);
      }
    });
    // set other submenu aria-expanded to false
    navSubmenus.forEach((submenu, index) => {
      if (index === parseInt(selectedIndex)) {
        submenu.setAttribute("aria-expanded", true);
      } else {
        submenu.setAttribute("aria-expanded", false);
      }
    });
  }
};
