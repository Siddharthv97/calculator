let display = document.querySelector("#display");
let btn = document.querySelectorAll(".btn");
let br = document.querySelector("#bracket");
function clearDisplay(){
    display.value = "";
}

function displayInput(number) {
    display.value += number;
}

function equal(){
    let result = display.value;
    display.value = eval(result);
}

function del(){
    display.value = display.value.slice(0, -1);
}
