// Using API ---------------------------------------------------------------->
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


// Show New Quote
function newQuote () {
    loading();
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine the styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}


// Get Quotes From API
async function getQuotes() {
    loading();
    //const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
     //const apiURL = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";
    try {
        //const response = await fetch(proxyUrl + apiURL);
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Production websites would show alert, can comment line of code below out if you wish
        alert(error);
        // Catch Error Here
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// // On Load
getQuotes();


// Using local file ---------------------------------------------------------------->


// let apiQuotes = [];

// Show New Quote
// function newQuote () {
//     // Pick a random quote from apiQuotes array
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// Get Quotes From API
// async function getQuotes() {
//     const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
     // const apiURL = "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";
//     try {
//         const response = await fetch(apiURL);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
        // Production websites would show alert, can comment line of code below out if you wish
//         alert(error);
        // Catch Error Here
//     }
// }

// On Load
// getQuotes();
//newQuote();