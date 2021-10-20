export default function portfolio(menuElemSelector, portfolioBlockSelector) {
    const menuElem = document.querySelectorAll(menuElemSelector),
          portfolioBlock = document.querySelectorAll(portfolioBlockSelector),
          portfolioNo = document.querySelector('.portfolio-no');

    function checkClass(classSelector) {
        menuElem.forEach(item => {
            item.addEventListener('click', () => {  
                if (item.classList.contains('grandmother') || item.classList.contains('granddad')) {
                    portfolioBlock.forEach(item => {
                        item.style.display = 'none';
                    });
                    portfolioNo.style.display = 'block';
                    menuElem.forEach(elem => {
                        elem.classList.remove('active');
                    });
                    item.classList.add('active');
                    return;
                }

                if (item.classList.contains(classSelector)) {
                    portfolioNo.style.display = 'none';
                    portfolioBlock.forEach(item => {
                        item.style.display = 'block';
                    });
                    menuElem.forEach(elem => {
                        elem.classList.remove('active');
                        portfolioBlock.forEach((item) => {
                            if (item.classList.contains(classSelector)) {
                                item.style.display = 'block';
                                item.classList.add('animated', 'fadeIn');
                            } else {
                                item.style.display = 'none';
                            }
                        });
                    });
                }      
                item.classList.add('active');
            });
        });
    }

    checkClass('all');
    checkClass('lovers');
    checkClass('chef');
    checkClass('girl');
    checkClass('guy');
    checkClass('grandmother');
    checkClass('granddad');
}