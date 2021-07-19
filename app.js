// Switch Tabs
const main = document.querySelector(".main");
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
main.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove selected from other buttons
        tabs.forEach(function (tab) {
            tab.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide other articles
        contents.forEach(function (content) {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});


// Calculator App
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


// BMI App
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var evalute = document.getElementById('evalute');
evalute.addEventListener("click", function () {
    if (height.value < 1 || weight.value < 1) {
        alert("Height and weigth required!");
    } else {
        let bmi = weight.value / (height.value**2);
        if (bmi < 18.5) {
            alert(`Your BMI = ${bmi} \nStatus: You are Under Weight!`);
        } else if (bmi < 24.9) {
            alert(`Your BMI = ${bmi} \nStatus: You are Normal Weight!`);
        } else if (bmi < 29.9) {
            alert(`Your BMI = ${bmi} \nStatus: You are Pre-obesity!`);
        } else if (bmi < 34.9) {
            alert(`Your BMI = ${bmi} \nStatus: You are Obesity Class 1!`);
        } else if (bmi < 39.9) {
            alert(`Your BMI = ${bmi} \nStatus: You are Obesity Class 2!`);
        } else {
            alert(`Your BMI = ${bmi} \nStatus: You are Obesity Class 3!`);
        }
    }
});


// Counter App
// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const ctr_btns = document.querySelectorAll(".btn");
ctr_btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
        count--;
        } else if (styles.contains("increase")) {
        count++;
        } else {
        count = 0;
        }

        if (count > 0) {
        value.style.color = "green";
        }
        if (count < 0) {
        value.style.color = "red";
        }
        if (count === 0) {
        value.style.color = "#222";
        }
        value.textContent = count;
    });
});


// Color changer App
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const change = document.getElementById("btn");
const color = document.querySelector(".color");
change.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    // console.log(hexColor);
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}