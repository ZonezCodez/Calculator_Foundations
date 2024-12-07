// Variables

// These variable let us monitor what is populated on the creen and what button is pressed.
let screenData = document.getElementById('screen');
const clearKey = document.getElementById('aClear');
const divideKey = document.getElementById('division');
const sevenKey = document.getElementById('seven');

// Event Handlers below
// This event handler handles the clearKey which when pressed will call the clearAll function to clear the screen.
clearKey.addEventListener('click',(e)=>{
    return clearScreen();
})
// This event handler will handle typing in the different keytpes.
divideKey.addEventListener('click',(e) => {
    return keyInput(' / ');
})

sevenKey .addEventListener('click', (e) => {
    return keyInput('7');
})
// Functions
// This function will handle adding two NUMBERS given to it.
function addition(n1,n2){
    console.log(n1+n2);
    updateScreen(n1 + n2);
}
// This function handles subtracting ywo NUMBERS given to it.
function subtraction(n1,n2){
    console.log(n1-n2);
    updateScreen(n1 - n2);
}
// This function handles multiplying two NUMBERS given to it.
function multiply(n1,n2){
    console.log(n1*n2);
    updateScreen(n1 * n2);
}
// This function handles dividing two numbers given to it.
function divide(n1,n2){
    if(n1 === 0 || n2 === 0){
        console.log("Cannot Div By 0");
        return "Cannot Div by 0";
    }else{
        console.log(n1/n2);
        updateScreen(n1 / n2);
    }
}
// This function handles which operation to do n1 and n2 have to be numbers not strings and the dn needs to be a string value of -, +, *, / for it to work properly.
function operate(n1,n2,fn){
    if(fn === '+'){
        return addition(n1,n2);
    }else if(fn === '-'){
        return subtraction(n1,n2);
    }else if(fn === '*'){
        return multiply(n1,n2);
    }else if(fn === '/'){
        return divide(n1,n2);
    }
}
// This function handles clearing the screen.
function clearScreen(){
    return screenData.textContent = "";    
}
// This function handles key inputs
function keyInput(data){
    if(screenData.textContent === '' && data === '/' || data === '+' || data === '-' || data === '*'){
        return 'Need a first number before equation.'
    }else if(screenData.textContent.includes('+') || screenData.textContent.includes('-') || screenData.textContent.includes('*') || screenData.textContent.includes('/') && data ===' / ' || data ===' * ' || data ===' + ' || data ===' - ') {
        let innerScreen = screenData.textContent.split(' ');
        operate(parseFloat(innerScreen[0]),parseFloat(innerScreen[2]),innerScreen[1]);
        return keyInput(data);
    }else{
        screenData.textContent = screenData.textContent + data;
    }
}
// This funtion handles updating the screen when the number is summed.
function updateScreen(val){
    if(isFloat(val)){
        return screenData.textContent = val.toFixed(2);
    }else{
        return screenData.textContent = val;
    }
}

function isFloat(num){
    return typeof num === 'number' && !Number.isInteger(num);
}
// Function Calls
