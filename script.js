alert("Welcome to Isaiah's Car Photography Portfolio!");

function showDateTime() {
    const now = new Date();
    const day = now.toLocaleDateString(undefined, { weekday: 'long' });
    const time = now.toLocaleTimeString();
    document.getElementById("datetime-display").textContent = `Today is ${day}, and the current time is ${time}`;
}
showDateTime();
setInterval(showDateTime, 1000);


const ratings = [4.5, 5.0, 3.8];
const average = Math.round((ratings.reduce((a, b) => a + b) / ratings.length) * 10) / 10;
console.log("Average rating:", average);


setTimeout(() => {
    alert("Don't forget to check out the contact page!");
}, 5000);


const number = 123;
const toText = number.toString();
const backToNumber = parseInt(toText);
console.log("Type of toText:", typeof toText, "| Type of backToNumber:", typeof backToNumber);


let countdown = 10;
const timerElement = document.getElementById("timer");
const countdownInterval = setInterval(() => {
    timerElement.textContent = countdown + " seconds";
    countdown--;
    if (countdown < 0) {
        clearInterval(countdownInterval);
        timerElement.textContent = "Event Started!";
    }