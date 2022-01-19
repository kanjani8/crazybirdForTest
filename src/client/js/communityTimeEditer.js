let createdAt = document.getElementsByClassName("createdAt");

export const timeIdentify = (createdAt) =>{
            const date = createdAt.innerHTML.substr(11, 4) + "/" 
                + createdAt.innerHTML.substr(4, 3)+ "/"
                + createdAt.innerHTML.substr(8, 2)+ "/"
                + createdAt.innerHTML.substr(16, 5);
         return date;
}

window.onload = function(){ 
    try{
        for(let i = 0; i < createdAt.length; i++){
            const date = timeIdentify(createdAt[i]);
            createdAt[i].innerText = date;
        }
    }catch(error){
        console.log(error);
    }
};