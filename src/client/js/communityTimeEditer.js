let createdAt = document.getElementsByClassName("posting__createdAt");

window.onload = function(){ 
    for(let i = 0; i < createdAt.length; i++){
        const date = createdAt[i].innerHTML.substr(11, 4) + "/" 
            + createdAt[i].innerHTML.substr(4, 3)+ "/"
            + createdAt[i].innerHTML.substr(8, 2)+ "/"
            + createdAt[i].innerHTML.substr(16, 5);
        createdAt[i].innerText = date;
    }
};