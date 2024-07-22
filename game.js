

// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let num1 = Math.floor(Math.random() * 101);
let num2 = Math.floor(Math.random() * 101);

document.getElementById('number1').textContent = num1;
document.getElementById('number2').textContent = num2;

// Iteration 3: Creating variables required to make the game functional

let operators = ['+', '-', '*', '/', '%'];
let correctOperator;
let result;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

let number3 = document.getElementById('number3');

// Iteration 5: Creating a randomise function to make the game functional

function randomise() {
    let randomIndex = Math.floor(Math.random() * operators.length);
    correctOperator = operators[randomIndex];
    
    switch (correctOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = Math.floor(num1 / num2); // Using floor to get integer division
            break;
        case '%':
            result = num1 % num2;
            break;
    }

    number3.textContent = result;
}

randomise();

// Iteration 6: Making the Operators (button) functional

document.getElementById('plus').addEventListener('click', function() {
    checkAnswer('+');
});
document.getElementById('minus').addEventListener('click', function() {
    checkAnswer('-');
});
document.getElementById('mul').addEventListener('click', function() {
    checkAnswer('*');
});
document.getElementById('divide').addEventListener('click', function() {
    checkAnswer('/');
});
document.getElementById('modulus').addEventListener('click', function() {
    checkAnswer('%');
});

function checkAnswer(operator) {
    if (operator === correctOperator) {
        alert('Correct!');
        window.location.href = 'gameover.html?score=1';
    } else {
        alert('Wrong!');
        window.location.href = 'gameover.html?score=0';
    }
}

// Iteration 7: Making Timer functional

let timer = document.getElementById('timer');
let timeLeft = 30;

let timerInterval = setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert('Time\'s up!');
        window.location.href = 'gameover.html?score=0';
    } else {
        timer.textContent = timeLeft;
        timeLeft--;
    }
}, 1000);
