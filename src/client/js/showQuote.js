const quoteBox = document.getElementsByClassName("quote__box")[0];
let quoteParagrh = document.getElementsByClassName("quote")[0];
let quoteAuthor = document.getElementsByClassName("author")[0];
const refreshBtn = document.getElementsByClassName("refresh")[0];

let quotes; 
try{
    quotes = JSON.parse(quoteBox.dataset.quotes);
    const randomNum =  Math.floor(Math.random() * (quotes.length));
    quoteParagrh.innerText = quotes[randomNum].content;
    quoteAuthor.innerText = quotes[randomNum].author+ ":";
}catch(error){
    console.log(error);
}


const refresh = (event) => {
    try{
        const randomNum =  Math.floor(Math.random() * (quotes.length));
        quoteParagrh.innerText = quotes[randomNum].content;
        quoteAuthor.innerText = quotes[randomNum].author + ":";
    }catch(error){
        console.log(error);
    }
} ;


refreshBtn.addEventListener("click", refresh);