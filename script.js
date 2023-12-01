// script.js

const data = {
	"quotes": [
		{
			"line1": "I'm a UI/UX",
			"line2": "Designer"
		},
		{
			"line1": "I'm a Tech",
			"line2": "Enthusiast"
		},
		{
			"line1": "I'm a Web",
			"line2": "Developer"
		}
	]
};

const quotes = data.quotes;

function getRandomQuote() {
    const arraySize = quotes.length;
    const randomIndex = Math.floor(Math.random() * arraySize);
    return quotes[randomIndex];
}

function updateLines() {
    const quote = getRandomQuote();
    document.getElementById("line1").innerText = quote.line1;
    document.getElementById("line2").innerText = quote.line2;
}

updateLines();

setInterval(updateLines, 1500);
