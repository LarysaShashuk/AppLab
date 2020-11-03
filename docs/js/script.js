console.log('hi from script');
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
const faqDB = [{
        id: 0,
        question: "How to contact with riders emergency?",
        answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    },
    {
        id: 1,
        question: "App installation failed, how to update system information?",
        answer: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
    },
    {
        id: 2,
        question: "Website reponse taking time, how to improve?",
        answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    },
    {
        id: 3,
        question: "New update fixed all bug and issues",
        answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. <br> <br> Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
    },
    {
        id: 4,
        question: "How to contact with riders emergency?",
        answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    }
];

const faqList = document.querySelector('.faqList');

faqDB.forEach(element => {
    const listItem = document.createElement('li');
    listItem.classList.add("faqList__item");
    faqList.append(listItem);

    const questionBlock = document.createElement("div");
    questionBlock.classList.add("faqList__item__questionBlock");
    listItem.append(questionBlock);

    const question = document.createElement("p");
    question.classList.add("faqList__item__question");
    question.innerHTML = `${element.question}`;
    questionBlock.append(question);

    const icon = document.createElement("div");
    icon.classList.add("faqList__item__icon");
    questionBlock.append(icon);

    const icon2 = document.createElement("div");
    icon2.classList.add("faqList__item__icon2");
    icon.append(icon2);

    const answer = document.createElement("p");
    answer.classList.add("faqList__item__answer");
    answer.classList.add("hiddenElement");
    answer.innerHTML = `${element.answer}`;
    listItem.append(answer);

    icon.addEventListener('click', () => {

        if (!icon2.classList.contains("hiddenElement")) {
            answer.classList.remove("hiddenElement");
            icon2.classList.add("hiddenElement");
        } else {
            answer.classList.add("hiddenElement");
            icon2.classList.remove("hiddenElement");
        }

    });

});
// JS function to detect WebP support

function testWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});