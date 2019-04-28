function removeMenu() {
    let sandwich = document.querySelector('.sandwich');
    sandwich.classList.remove('sandwich--active');
    let nav = document.querySelector('.nav');
    nav.classList.remove('nav--active');
    let navActivePage = document.querySelector('.nav__active-page');
    navActivePage.classList.remove('nav__active-page--none');
    let navList = document.querySelector('.nav__list');
    navList.classList.remove('nav__list--v');
}

function sandwichMenu() {
    let sandwichWrap = document.querySelector('.sandwich__wrap');
    sandwichWrap.onclick = () => {
        let navActivePage = document.querySelector('.nav__active-page');
        let nav = document.querySelector('.nav');
        let navList = document.querySelector('.nav__list');
        let sandwich = document.querySelector('.sandwich');
        sandwich.classList.toggle('sandwich--active');
        navList.classList.toggle('nav__list--v');
        nav.classList.toggle('nav--active');
        navActivePage.classList.toggle('nav__active-page--none');
    };
}

export {sandwichMenu, removeMenu};
