function whenOpened() {
    document.cookie = "wasOpened=1";
}

function whenClosed() {
    document.cookie = `wasOpened=1;expires=${new Date(0)}`;
}

function scrollAfterAnimation() {
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: 'smooth'
    })
}

function navigationBannerAppears() {
    let navigationBannerAppearing = document.querySelectorAll(".navigation-banner");
    for (let i = 0; i < navigationBannerAppearing.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = navigationBannerAppearing[i].getBoundingClientRect().top;
        let elementVisible = 0;
        if (elementTop < windowHeight + elementVisible) {
            navigationBannerAppearing[i].classList.add("navigation-banner-appeared");
        }
    }
}

function navigationBreadcrumbAppears() {
    let navigationBreadcrumbAppearing = document.querySelectorAll(".navigation-breadcrumb");
    for (let i = 0; i < navigationBreadcrumbAppearing.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = navigationBreadcrumbAppearing[i].getBoundingClientRect().top;
        let elementVisible = 200;
        if (elementTop < windowHeight + elementVisible) {
            navigationBreadcrumbAppearing[i].classList.add("navigation-breadcrumb-appeared");
        }
    }
}

function mainPageTextAppears() {
    let mainPageTextAppearing = document.querySelectorAll(".main-page-text");
    for (let i = 0; i < mainPageTextAppearing.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = mainPageTextAppearing[i].getBoundingClientRect().top;
        let elementVisible = 1000;
        if (elementTop < windowHeight + elementVisible) {
            mainPageTextAppearing[i].classList.add("main-page-text-appeared");
        }
    }
}

function navigationAsideLeftAppears() {
    let navigationAsideLeftAppearing = document.querySelectorAll(".navigation-aside-left");
    for (let i = 0; i < navigationAsideLeftAppearing.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = navigationAsideLeftAppearing[i].getBoundingClientRect().top;
        let elementVisible = 200;
        if (elementTop < windowHeight + elementVisible) {
            navigationAsideLeftAppearing[i].classList.add("navigation-aside-left-appeared");
        }
    }
}

function navigationAsideRightAppears() {
    let navigationAsideRightAppearing = document.querySelectorAll(".navigation-aside-right");
    for (let i = 0; i < navigationAsideRightAppearing.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = navigationAsideRightAppearing[i].getBoundingClientRect().top;
        let elementVisible = 200;
        if (elementTop < windowHeight + elementVisible) {
            navigationAsideRightAppearing[i].classList.add("navigation-aside-right-appeared");
        }
    }
}

function footerAppears() {
    let footerAppearing = document.querySelectorAll("footer");
    for (let i = 0; i < footerAppearing.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = footerAppearing[i].getBoundingClientRect().top;
        let elementVisible = 0;
        if (elementTop < windowHeight - elementVisible) {
            footerAppearing[i].classList.add("footer-appeared");
        }
    }
}

function getCookie() {
    return document.cookie.split(";").reduce((acc, item) => {
        const [name, value] = item.split("=");
        acc[name] = value;
        return acc;
    }, {});
}
const cookie = getCookie();

window.addEventListener("open", whenOpened);
window.addEventListener("beforeunload", whenClosed);
if (cookie.wasOpened == 1) {
    setTimeout(scrollAfterAnimation, 5000);
    window.addEventListener("scroll", navigationBannerAppears);
    window.addEventListener("scroll", navigationBreadcrumbAppears);
    window.addEventListener("scroll", mainPageTextAppears);
    window.addEventListener("scroll", navigationAsideLeftAppears);
    window.addEventListener("scroll", navigationAsideRightAppears);
    window.addEventListener("scroll", footerAppears);
}
/*
window.removeEventListener("scroll", navigationBannerAppears);
window.removeEventListener("scroll", navigationBreadcrumbAppears);
window.removeEventListener("scroll", mainPageTextAppears);
window.removeEventListener("scroll", navigationAsideLeftAppears);
window.removeEventListener("scroll", navigationAsideRightAppears);
window.removeEventListener("scroll", footerAppears);*/