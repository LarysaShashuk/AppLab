// script for burger menu

const burgerMenuOpen = document.querySelector('.burger-menu__button-open'),
    closeLinesHide = document.querySelectorAll(
        '.burger-menu__button-open__line--hide'
    ),
    closeLineShow = document.querySelector(
        '.burger-menu__button-open__line--show'
    ),
    burgerMenuLink = document.querySelector(
        '.burger-modal__navigation__list__link'
    ),
    burgerModal = document.querySelector('.burger-modal');

function changeBgColor(elementDOM, color) {
    const property = `background-color:${color};`;
    elementDOM.setAttribute('style', property);
}

burgerMenuOpen.addEventListener('click', function () {
    if (burgerMenuOpen.classList.contains('burgerModalOpen')) {
        burgerModal.classList.add('hiddenElement');
        burgerMenuOpen.classList.remove('burgerModalOpen');

        closeLinesHide.forEach(function (element) {
            element.classList.remove('hiddenElement');
        });
        closeLineShow.classList.remove('burger-menu__button-close__line');
        changeBgColor(closeLineShow, '$darkBlue');
    } else {
        burgerModal.classList.remove('hiddenElement');
        burgerMenuOpen.classList.add('burgerModalOpen');

        closeLinesHide.forEach(function (element) {
            element.classList.add('hiddenElement');
        });
        closeLineShow.classList.add('burger-menu__button-close__line');
        changeBgColor(closeLineShow, 'transparent');
    }
});

burgerMenuLink.addEventListener('click', function () {
    burgerModal.classList.add(' hiddenElement ');
});