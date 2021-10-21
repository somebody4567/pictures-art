const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);
        
    let sum = 0;

    const calcFunc = () => {
        if ([sizeBlock, materialBlock].some(item => item.value == '')) {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        }
        if ([sizeBlock, materialBlock].every(item => item.value != '') && promocodeBlock.value != 'IWANTPOPART') {
            sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
            resultBlock.textContent = `${sum}руб`;
            promocodeBlock.style.color = '';
            resultBlock.style.color = '';
        }
        if ([sizeBlock, materialBlock].every(item => item.value != '') && promocodeBlock.value.toUpperCase() == 'IWANTPOPART') {
            sum = Math.round(sum * 0.7);
            resultBlock.textContent = `${sum}руб`;
            promocodeBlock.style.color = 'green';
            resultBlock.style.color = 'green';
        } 
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
    promocodeBlock.closest('.calc_form').addEventListener('submit', () => {
        promocodeBlock.style.color = '';
        resultBlock.style.color = '';
    });
};

export default calc;