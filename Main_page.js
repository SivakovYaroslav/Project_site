function navigationBannerAppears() {
  var navigationBannerAppearing = document.querySelectorAll(".navigation-banner");

  for (var i = 0; i < navigationBannerAppearing.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = navigationBannerAppearing[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      navigationBannerAppearing[i].classList.add("navigation-banner-appeared");
    }
  }
}

window.addEventListener("scroll", navigationBannerAppears);