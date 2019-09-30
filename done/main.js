const main = document.querySelector('main');
const bouton = document.querySelector('button');
const cards = document.querySelectorAll('.card');
const arrows = document.querySelectorAll('.arrow');

let position = 0;

const swipeLeft = () => {
    position += 100 / 3;
    main.style.transform = "translateX("+position+"%)";
    main.style.transition = "transform 0.3s ease-out";
};

const swipeRight = () => {
    position += -100 / 3;
    main.style.transform = "translateX("+position+"%)";
    main.style.transition = "transform 0.3s ease-out";
};

bouton.addEventListener('click', swipeRight);

cards.forEach((card) => {
    card.addEventListener('click', swipeRight);
});

arrows.forEach((arrow) => {
    arrow.addEventListener('click', swipeLeft);
});