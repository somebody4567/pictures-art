const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active-style')) {
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content');
                return;
            }
            btns.forEach(item => {
                item.classList.remove('active-style');
                item.nextElementSibling.classList.remove('active-content');
            });
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');
        });
    });
};

export default accordion;