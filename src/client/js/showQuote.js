const quoteBox = document.getElementsByClassName("quote__box")[0];
let quoteParagrh = document.getElementsByClassName("quote")[0];
let quoteAuthor = document.getElementsByClassName("author")[0];
const refreshBtn = document.getElementsByClassName("refresh")[0];
const quote__button = document.getElementsByClassName("quote__button")[0];
const select = document.getElementsByClassName("modeSelect")[0];
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

const selectMode = (e) => {
        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action","/changeQuote" );
        let hidden = document.createElement("input");
        hidden.setAttribute("name", "mode");
        hidden.setAttribute("value", select.value);
        form.appendChild(hidden);
        document.body.appendChild(form);
        console.log(form.innerHTML);
        form.submit();
        // const op1 = select.options[1];
        // const op2 = select.options[2];
        // select.options[1] = op2;
        // select.options[2] = op1;
        // const text = select.options[1].text;
        // const value = select.options[1].value;
        // select.options[1].text=select.options[2].text;
        // select.options[1].value=select.option[2].value;
        // select.options[2].text=text;
        // select.options[2].value=value;
}

quote__button.addEventListener("click",clickQuoteBtn);
refreshBtn.addEventListener("click", refresh);
select.addEventListener("change",selectMode);
