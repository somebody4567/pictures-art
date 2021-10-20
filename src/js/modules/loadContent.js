export default function loadContent(trigger, content) {
    const btn = document.querySelector(trigger),
          styles = document.querySelectorAll(content);

    styles.forEach(item => {
        item.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        styles.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    });
}