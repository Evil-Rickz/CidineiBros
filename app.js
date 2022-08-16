const cidinei = document.querySelector('.cidinei');
const cano = document.querySelector('.pipe');
const jumping = document.querySelector('.jumping')

const jump = () => {
    cidinei.classList.add('disable');
    jumping.classList.remove('disable');
    jumping.classList.add('jump');

    setTimeout(() => {
        jumping.classList.remove('jump');
        jumping.classList.add('disable');
        cidinei.classList.remove('disable');
    }, 500);
}

const loop = setInterval(() => {

    const canoPosition = pipe.offsetLeft;
    const cidineiPosition = cidinei.offsetBottom;
    
    if (canoPosition <= 120) {

        pipe.style.animation = 'none';
        pipe.style.left = '${canoPosition}px';
    }
}, 10);

document.addEventListener('keydown', jump);