function modal() {
    let isPressed = false;
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              scroll = calcScrollBar(),
              gift = document.querySelector('.fixed-gift'),
              windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                gift.style.marginRight = `${scroll}px`;

                if (item.classList.contains('fixed-gift')) {
                    item.remove();
                }
                isPressed = true;
            });
        });

        close.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            gift.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target && e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                gift.style.marginRight = `0px`;
            }
        });
    }

    function calcScrollBar() {
        const div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        document.body.append(div);
        const scrollBar = div.offsetWidth - div.clientWidth;
        div.remove();    
        return scrollBar;
    }

    window.addEventListener('scroll', showGiftInTheEnd);

    function showGiftInTheEnd() {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        if (!isPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
            document.querySelector('.fixed-gift').remove();
            document.querySelector('.popup-gift').style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
            window.removeEventListener('scroll', showGiftInTheEnd);
        }
    }
    
    
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');
}

export default modal;