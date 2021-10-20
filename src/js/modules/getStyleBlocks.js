export default function getStyleBlocks(trigger, wrapper) {
    const btn = document.querySelector(trigger);
    async function getData(url) {
        const res = await fetch(url);
        return await res.json();
    }

    class UseData {
        constructor(src, title, type) {
            this.src = src;
            this.title = title;
            this.type = type;
        }

        createCard() {
            const div = document.createElement('div');
            div.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
            div.innerHTML = `
            <div class=styles-block>
                <img src="${this.src}" alt>
                <h4>${this.title}</h4>
                <a href="${this.type}">Подробнее</a>
            </div>
            `;
            document.querySelector(wrapper).append(div);
        }
    }

    btn.addEventListener('click', () => {
        getData('assets/db2.json')
        .then(data => {
            for (let i = 0; i < data.styles.length; i++) {
                new UseData(data.styles[i].src, data.styles[i].title, data.styles[i].link).createCard();
            }
        })
        .catch(() => {
            throw new Error('Something goes wrong...');
        });
        btn.remove();
    });
}