const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector); 

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {  // Настройка показа элемента
            upElem.classList.add('animated', 'fadeIn');   // Если сверху больше чем 1650px то плавно появляется элемент, иначе скрывается так же плавно
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),  // Получили все ссылки, которые начинаются с: '#'. (^- каретка, она проверяет: начинается ли строка с опред. символов)
        speed = 0.10;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop;  // Получили кол-во px сверху, т.е сколько проскролено
                let hash = this.hash; // Получает, по сути, id эл. на который кликнули
                let toBlock;
                try {toBlock = document.querySelector(hash).getBoundingClientRect().top;} catch(e) {} //Получает знач, на которое переместились относительно верха страницы(1650, 5000, 3000 - знач в px)
                let start = null;

            requestAnimationFrame(step);

            function step(time) { // Время, прошедшее с захода на стр
                if (start === null) {
                    start = time;
                }
                //Счетчик времени     Время начала анимации
                
                let progress = time - start, // Получает время за которое была выполнена анимация
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));
                    
                    document.documentElement.scrollTo(0, r); // r - расстояние на которое необходимо переместиться

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};

export default scrolling;