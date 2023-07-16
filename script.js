let navstate = true;
let leftLststate = true;

function toggleNav() {
  let mobileNav = document.getElementById("mobile-nav");
  let navLinks = document.getElementById("navLinks");
  if (navstate == true) {
    mobileNav.classList.add("active");
    navstate = false;
  } else {
    mobileNav.classList.remove("active");
    navstate = true;
  }
}

$(window).on("beforeunload", function () {
  $(window).scrollTop(0);
});
