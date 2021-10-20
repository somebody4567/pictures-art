import postData from "../service/workWithServer";

const forms = (state) => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          inputsFileType = document.querySelectorAll('[name="upload"]');

    function clearInputs() {
        inputs.forEach(item => {
            item.value = '';
        });
        inputsFileType.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    }

    const messages = {
        load: 'assets/img/spinner.gif',
        loading: 'Загрузка...',
        ok: 'assets/img/ok.png',
        success: 'Спасибо за заказ, мы скоро с Вами свяжемся!',
        fail: 'assets/img/fail.png',
        failure: 'Что-то пошло не так...'
    };

    const paths = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    inputsFileType.forEach(item => {
        item.addEventListener('input', () => {
            const arr = item.files[0].name.split('.');
            if (arr[0].length > 15) {
                arr[0] = arr[0].slice(0, 16) + '...';
            } else {
                arr[0] = arr[0];
            }
            item.previousElementSibling.textContent = arr.join('.');
        });
    });

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let messageBlock = document.createElement('div');
            messageBlock.classList.add('status');
            item.parentElement.append(messageBlock);

            let statusImg = document.createElement('img');
            statusImg.src = messages.load;
            messageBlock.append(statusImg);

            let statusText = document.createElement('div');
            statusText.textContent = messages.loading;
            messageBlock.append(statusText);

            item.classList.add('animated', 'fadeOutUp');

            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            messageBlock.classList.add('animated', 'fadeInUp');

            let adress;
            if (item.closest('popup-design') || item.closest('calc_form')) {
                adress = paths.designer;
            } else {
                adress = paths.question;
            }

            const formData = new FormData(item);
            if (item.classList.contains('calc_form')) {
                console.log(true);
                formData.append('totalPrice', document.querySelector('.calc-price').textContent);
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            postData(adress, formData)
                .then((data) => {
                    statusImg.src = messages.ok;
                    statusText.textContent = messages.success;
                    console.log(data);
                })
                .catch(() => {
                    statusImg.src = messages.fail;
                    statusText.textContent = messages.failure;
                })
                .finally(() => {
                    forms.forEach(form => {
                        form.reset();
                    });
                    document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины';
                    document.querySelector('.calc-price').style.fontSize = '14px';
                    clearInputs();
                    setTimeout(() => {
                        messageBlock.remove();
                        item.classList.remove('fadeOutUp');
                        item.style.display = 'block';
                        item.classList.add('fadeInUp');
                    }, 4000);
                });
        });
    });
};

export default forms;