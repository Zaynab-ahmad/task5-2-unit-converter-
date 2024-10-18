// Set the default selection to length
window.addEventListener('load', function() {
    convertType.value = "length"; 
    addLengthUnits(); 
});
// Getting the DOM elements
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const inputType = document.querySelector('.input-type');
const resultType = document.querySelector('.result-type');
const convertType = document.querySelector('.convert-type');
// Arrays of unit options
const lengthOptions = ['Kilometre', 'Metre', 'Centimetre'];
const massOptions = ['Kilogram', 'Ounce', 'Pound'];
const tempOptions = ['Celsius', 'Fahrenheit', 'Kelvin'];
// Event listener for convert type selection
convertType.addEventListener('change', function () {
    // Clear existing options
    input.value = ''; // Clear the input field
    result.value = '';
    inputType.innerHTML = "";
    resultType.innerHTML = "";
    
    if (convertType.value === "length") {
        addLengthUnits();
    } else if (convertType.value === "mass") {
        addMassUnits();
    } else if (convertType.value === "temp") {
        addTempUnits();
    }
});
// Function to add length units
function addLengthUnits() {
    // Add new options for length units
    lengthOptions.forEach(option => {
        const inputOption = document.createElement('option');
        inputOption.textContent = option;
        inputType.appendChild(inputOption);

        const resultOption = document.createElement('option');
        resultOption.textContent = option;
        resultType.appendChild(resultOption);
    });
}
// Function to add mass units
function addMassUnits() {
    massOptions.forEach(option => {
        const inputOption = document.createElement('option');
        inputOption.textContent = option;
        inputType.appendChild(inputOption);

        const resultOption = document.createElement('option');
        resultOption.textContent = option;
        resultType.appendChild(resultOption);
    });
}
// Function to add temperature units
function addTempUnits() {
    tempOptions.forEach(option => {
        const inputOption = document.createElement('option');
        inputOption.textContent = option;
        inputType.appendChild(inputOption);

        const resultOption = document.createElement('option');
        resultOption.textContent = option;
        resultType.appendChild(resultOption);
    });
}
// Event listeners
input.addEventListener('keyup', compute);
inputType.addEventListener('change', compute);
resultType.addEventListener('change', compute);
//comput function
 function compute() { 
    let inputValue = inputType.value.toLowerCase(); // Convert to lowercase for easier comparison
    let outputValue = resultType.value.toLowerCase(); 
    let inputNum = parseFloat(input.value);
    if (isNaN(inputNum)) {
        result.value = 'Invalid input';
        return;
    }
    let resultValue;
    if (inputValue === outputValue){ resultValue = inputNum};
    //  Length conversion 
    if (inputValue === "metre" && outputValue === "kilometre") {
        resultValue = inputNum / 1000; 
    } else if (inputValue === "centimetre" && outputValue === "kilometre") {
        resultValue = inputNum / 100000; 
    } else if (inputValue === "kilometre" && outputValue === "metre") {
        resultValue = inputNum * 1000;
    } else if (inputValue === "centimetre" && outputValue === "metre") {
        resultValue = inputNum / 100; 
    } else if (inputValue === "kilometre" && outputValue === "centimetre") {
        resultValue = inputNum * 100000; 
    } else if (inputValue === "metre" && outputValue === "centimetre") {
        resultValue = inputNum * 100;
    } 
    //  mass conversion 
    if (inputValue === "kilogram" && outputValue === "pound") {
        resultValue = inputNum * 2.20462; 
    } else if (inputValue === "kilogram" && outputValue === "ounce") {
        resultValue = inputNum * 35.274; 
    } else if (inputValue === "pound" && outputValue === "kilogram") {
        resultValue = inputNum / 2.20462; 
    } else if (inputValue === "pound" && outputValue === "ounce") {
        resultValue = inputNum * 16; 
    } else if (inputValue === "ounce" && outputValue === "kilogram") {
        resultValue = inputNum / 35.274; 
    } else if (inputValue === "ounce" && outputValue === "pound") {
        resultValue = inputNum / 16;
    } 
    // Temperature conversion 
    if (inputValue === "celsius" && outputValue === "fahrenheit") {
        resultValue = (inputNum * 9/5) + 32; 
    } else if (inputValue === "celsius" && outputValue === "kelvin") {
        resultValue = inputNum + 273.15; 
    } else if (inputValue === "fahrenheit" && outputValue === "celsius") {
        resultValue = (inputNum - 32) * 5/9;
    } else if (inputValue === "fahrenheit" && outputValue === "kelvin") {
        resultValue = (inputNum - 32) * 5/9 + 273.15; 
    } else if (inputValue === "kelvin" && outputValue === "celsius") {
        resultValue = inputNum - 273.15; 
    } else if (inputValue === "kelvin" && outputValue === "fahrenheit") {
        resultValue = (inputNum - 273.15) * 9/5 + 32; 
    }
    result.value = resultValue.toFixed(5);
}

