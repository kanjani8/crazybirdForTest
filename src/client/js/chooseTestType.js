const length = document.getElementsByClassName("length");

const radio1 = document.getElementById("middle");
const radio2 = document.getElementById("final");
const radio3 = document.getElementById("extra");
const radio4 = document.getElementById("close");
const radio5 = document.getElementById("open");

let type = "middle";
let opened = 0;

const handleChoose = (event) => {
    const {
      target: { value }, // middle final extra 중 하나
    } = event;
    console.log(event);
    if(value === 0 || value ===1){
        opened = value;
    }
    else{
        type = value;
        for(let i = 0; i < length.length; i++){
            length[i].style.display = "none";
        }
        document.getElementById("length_" + value).style.display = 'block';
        document.getElementById("myLength_" + value).style.display = 'block';
    }
    next();
};

const countNum = (event) => { 
    const select = document.getElementById("select");
    let num;
    if(opened){
       num = document.getElementById("length_" + type).innerText;
    }
    else{
      num = document.getElementById("myLength_" + type).innerText;
    }
    num = Number(num);// 해당 옵션에서 풀수 있는 문제 수
    for(let i = 0; i < num; i++){ // option추가를 마저 해야함
        let option = document.createElement("option");
        option.setAttribute("value", )

        select.appendChild(option);
    }
};


radio1.addEventListener("change", handleChoose, countNum);
radio2.addEventListener("change", handleChoose, countNum); 
radio3.addEventListener("change", handleChoose, countNum); 
radio4.addEventListener("change", handleChoose, countNum); 
radio5.addEventListener("change", handleChoose, countNum); 

