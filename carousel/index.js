// carousel_btn 클릭하면 동작한다. left_btn, right_btn가 있다.

const carousel__btn = document.querySelectorAll('.carousel__btn');
const left__btn = document.querySelector('.left__btn');
const right__btn = document.querySelector('.right__btn');

// carousel이 총 몇개로 이루어 졌는지 확인하기.
const carousel__list = document.querySelectorAll('.carousel__content');



for (let i = 0; i < carousel__list.length; i++) {
    carousel__list[i].classList.add(`carousel__content__${i + 1}`);
    // 첫번째 컨텐츠는 left = 0
    if (carousel__list[i] === document.querySelector(`.carousel__content__1`)) {
        document.querySelector(`.carousel__content__${i + 1}`).style.left = `0`;
    } //마지막 컨텐츠는 left = -400px
    else if (carousel__list[i] === document.querySelector(`.carousel__content__${carousel__list.length}`)) {
        document.querySelector(`.carousel__content__${i + 1}`).style.left = `-400px`;
    } //나머지 컨텐츠 만약 컨텐츠가 두번째면 400px 세번째면 800px ...
    else {
        document.querySelector(`.carousel__content__${i + 1}`).style.left += `${400*i}px`;
    }
}
// 클릭 이벤트
carousel__btn.forEach(item => {
    item.addEventListener('click', function () {
        if (item.classList.contains('left__btn')) {
            carouselEventLeft()
            console.log('left');
        } else if (item.classList.contains('right__btn')) {
            console.log(carousel__list.length);
        };
    });
    
});

function carouselEventLeft() {
    for (let i = 0; i < carousel__list.length; i++) {
        carousel__list[i].classList.remove(`carousel__content__${i + 1}`);
        // 왼쪽 버튼을 클릭하면 첫번째 요소를 바꾼다.
        if (carousel__list[i] === carousel__list[0]) {
            carousel__list[i].classList.add(`carousel__content__${carousel__list.length}`);
            carousel__list[i].style.left = `-400px`;    
        } // 두번째 요소를 0으로 바꾼다. 
        else if (carousel__list[i] === carousel__list[1]) {
            carousel__list[i].classList.add(`carousel__content__${i}`);
            carousel__list[i].style.left = `0px`;
        }
        else {
            carousel__list[i].classList.add(`carousel__content__${i}`);
            carousel__list[i].style.left = `${400 * (i - 1)}px`;
        }
    }
}