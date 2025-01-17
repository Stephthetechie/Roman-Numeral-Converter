const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const romanNumeralOutput = document.getElementById('output');
const historyList = document.getElementById('history-list');
const summaries = document.querySelectorAll('summary')
const svgX = document.querySelectorAll('.svg-x')
const svgPlus = document.querySelectorAll('.svg-plus')

const sideBar = document.getElementById('sidebar');
const barIcon = document.querySelector('.checkbox');




    const numerals = {       
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',

    };
const convertToRoman = (num) => {

    let romanNumeral = '';
    let decimalKeys = Object.keys(numerals).reverse();
    decimalKeys.forEach(key => {
        while (key <= num) {
            romanNumeral += numerals[key];
            num -= key;
            
        }
        
    });
    return romanNumeral;
}

const checkInput = () => {
    const input = parseInt(numberInput.value);
    romanNumeralOutput.style.display = 'block';
    if (isNaN(input)){
        romanNumeralOutput.style.color = 'red';
        romanNumeralOutput.innerText = "Please enter a valid number";
        return ;
    }
    if (input < 1){
        romanNumeralOutput.style.color = 'red';
        romanNumeralOutput.innerText = "Please enter a number greater than or equal to 1";
        return ;
    }
    if (input > 3999){
        romanNumeralOutput.style.color = 'red';
        romanNumeralOutput.innerText = "Please enter a number less than or equal to 3999";
        return ;
    }
    romanNumeralOutput.innerHTML = convertToRoman(input);
    addToHistory();
    numberInput.value = ''
}

const addToHistory = () => {
    const listItem = document.createElement('li');
    listItem.textContent = `${numberInput.value} = ${romanNumeralOutput.innerHTML}`;
    historyList.appendChild(listItem);
}


convertButton.addEventListener('click', checkInput);
numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        checkInput();
    }
})

summaries.forEach((item, index) => {
    item.addEventListener('click', () => {
        setTimeout(() => {
                const isOpen = item.parentElement.open;
                if (isOpen) {
                svgPlus[index].classList.remove('active');
                svgX[index].classList.add('active');
                } else {
                svgPlus[index].classList.add('active');
                svgX[index].classList.remove('active');
            }
        }, 0);
    })
})

barIcon.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    barIcon.style.display.left = '300px';
    })