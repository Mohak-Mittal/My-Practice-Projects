let numbers = document.querySelectorAll("#numbers");
let display = document.querySelector(".expression");
let operators = ['+','-','*','/','%'];
let resultDisplayed = false;


numbers.forEach(val => {
    val.addEventListener("click", () => {
        if(resultDisplayed) {
            resultDisplayed = false;
            display.innerText = "";
        }
        const str = val.innerText;
        display.innerText += str;
        check(display.innerText);
    });
});


const check = (str) => {
    if(operators.includes(str[str.length-1]) && operators.includes(str[str.length-2])) {
        setTimeout(function() {
            alert("Invalid Input! Try Again");
        }, 100);
        setTimeout(function() { 
           display.innerText = "";
        }, 100);
    }
    if(str[str.length-1]=='.') {
        try {
            let result = math.evaluate(str);
        } catch (e) {
            setTimeout(function() {
                alert("Invalid Input! Try Again");
            }, 100);
            setTimeout(function() { 
                display.innerText = "";
             }, 100);
        }
    }
};


const clear = document.getElementById("delete");
clear.addEventListener("click", () => {
    display.innerText = "";
});


const remove = document.getElementById("remove");
remove.addEventListener("click", () => {
    let str = display.innerText;
    str = str.slice(0,str.length-1);
    display.innerText = str;
});


const answer = document.querySelector("#equal")
answer.addEventListener("click", () => {
    try {
        let expression = display.innerText;
        let result = math.evaluate(expression)
        if (!Number.isInteger(result)) {    //check the float value and limit it to 10 decimal point only and convered the tofixed string back to number
            result = Number(result.toFixed(10));
        }
    resultDisplayed = true;
    display.innerText = result;
    console.log(result);
    } catch (e) {
        alert("Invalid Input! Try Again");
        display.innerText = "";
    }
});

