const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', () => {
    
    boxes[0].classList.toggle('box--featured');
}
)
