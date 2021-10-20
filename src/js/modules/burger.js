export default function burger(burgerSelector, menuSelector) {
    const burger = document.querySelector(burgerSelector),
          menu = document.querySelector(menuSelector);

    burger.addEventListener('click', () => {
        if (menu.style.display == 'none' && screen.availWidth <= 992) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }

        window.addEventListener('resize', () => {
            if (screen.availWidth > 993) {
                menu.style.display = 'none';
            }
        });
    });
}