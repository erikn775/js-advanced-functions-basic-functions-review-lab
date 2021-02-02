// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(ad = "*") {
    return function(first = "special") {
        return `You are ${ad}${first}${ad}!`;
    }
}
wrapAdjective("!!")("Cute Dog")

const Calculator = {
    add: function add(num1, num2) {
        return num1 + num2;
    },
    subtract: function subtract(num1, num2) {
        return num1 - num2;
    },
    multiply: function multiply(num1, num2) {
        return num1 * num2;
    },
    divide: function divide(num1, num2) {
        return num1 / num2;
    }
};


function actionApplyer(a, array) {
    if (array === undefined || array.length == 0) {
        return a
    }
    else {
        return (a * 2 + 1000) % 7
    }
}