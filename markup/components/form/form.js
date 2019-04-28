import {removeMenu} from '../navigation/sandwich/sandwich';
function getForm() {
    let loginLink = document.querySelector('.nav__link--login');
    let closeForm = document.querySelector('.login-form__close');
    loginLink.onclick = () => {
        removeMenu();
        let form = document.querySelector('.login-form');
        form.classList.toggle('login-form--enabled');
    };
    closeForm.onclick = () => {
        let form = document.querySelector('.login-form');
        form.classList.toggle('login-form--enabled');
    };
}

export default getForm;
