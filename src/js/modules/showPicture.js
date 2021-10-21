export default function showPicture () {
    const sizesBlock = document.querySelectorAll('.sizes-block');

    sizesBlock.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            const innerParagraphs = item.querySelectorAll('p'),
            innerImg = item.querySelector('img');
            innerImg.src = `assets/img/sizes-${i + 1}-1.png`;
            innerParagraphs.forEach(el => {
                el.style.display = 'none';
                if (el.classList.contains('sizes-hit')) {
                    el.style.display = 'block';
                }
            });
        });
        
        item.addEventListener('mouseleave', () => {
            const innerParagraphs = item.querySelectorAll('p'),
            innerImg = item.querySelector('img');
            innerImg.src = `assets/img/sizes-${i + 1}.png`;
            innerParagraphs.forEach(el => {
                el.style.display = 'block';
            });
        });
    });
}