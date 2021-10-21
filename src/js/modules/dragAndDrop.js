import postData from "../service/workWithServer";

export default function dragAndDrop() {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);   
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            const arr = input.files[0].name.split('.');
            if (arr[0].length > 15) {
                arr[0] = arr[0].slice(0, 16) + '...';
            } else {
                arr[0] = arr[0];
            }
            input.previousElementSibling.textContent = arr.join('.');
            if (input.closest('.main')) {
                const formData = new FormData();
                formData.append('File', input.files[0]);
                console.log(input.files, formData);
                postData('assets/server.php', formData)
                .then(res => console.log(res))
                .catch()
                .finally(() => {
                    input.previousElementSibling.textContent = 'Файл не выбран';
                });
            }
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlightElement(item) {
        item.closest('.file_upload').style.border = '4px solid red';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)';
    }

    function unhighlightElement(item) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = '#ededed';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else if (item.closest('.main')) {
            item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlightElement(input));
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlightElement(input));
        });
    });
  
    
}