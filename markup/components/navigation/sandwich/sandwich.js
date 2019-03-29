import $ from 'jquery';

function sandwichMenu() {
    $(document).on('click', '.sandwich__wrap', function () {
        let navActivePage = $('.nav__active-page');
        let nav = $('.nav');
        let navList = $('.nav__list');
        let sandwich = $('.sandwich');
        sandwich.toggleClass('sandwich--active');
        navList.toggleClass('nav__list--v');
        nav.toggleClass('nav--active');
        navActivePage.toggleClass('nav__active-page--none');
    });
}

export default sandwichMenu;
