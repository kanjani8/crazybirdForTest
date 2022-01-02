const quoteBox = document.getElementsByClassName("quote__box")[0];
let quoteParagrh = document.getElementsByClassName("quote")[0];
let quoteAuthor = document.getElementsByClassName("author")[0];
const refreshBtn = document.getElementsByClassName("refresh")[0];
const quote__button = document.getElementsByClassName("quote__button")[0];
let quotes; 
try{
    quotes = JSON.parse(quoteBox.dataset.quotes);
    const randomNum =  Math.floor(Math.random() * (quotes.length));
    quoteParagrh.innerText = quotes[randomNum].content;
    quoteAuthor.innerText = quotes[randomNum].author+ ":";
}catch(error){
    console.log(error);
}

const clickQuoteBtn = () => {
    var url = "plusQuote";
    var name = "_blank";
    var option = "width = 500, height = 500, top = 100, left = 200, location = no"
    window.open(url, name, option);

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

quote__button.addEventListener("click",clickQuoteBtn);
refreshBtn.addEventListener("click", refresh);