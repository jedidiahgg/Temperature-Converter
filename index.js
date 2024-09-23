const myTemp = document.getElementById('myTemp');
const csTofr = document.getElementById('csTofr');
const frTocs = document.getElementById('frTocs');
const mySubmit = document.getElementById('mySubmit');
const output = document.getElementById('output');

let result;
let input;

mySubmit.onclick = function(){
    if (csTofr.checked){
        input = Number(myTemp.value);
        result = (9/5)*input + 32;
        output.textContent = result;

    }
    else if (frTocs.checked){
        input = Number(myTemp.value);
        result = (5/9)*(input-32);
        output.textContent = result;
    }
    else{
        output.textContent = `Please select one option`;
    }
}