const length = document.getElementsByClassName("length");

const radio1 = document.getElementById("middle");
const radio2 = document.getElementById("final");
const radio3 = document.getElementById("extra");
const radio4 = document.getElementById("close");
const radio5 = document.getElementById("open");
const startbtn = document.getElementById("startbtn");
const myPoint = document.getElementsByClassName("point")[0];

let type = "middle";
let opened = 0;

const handleChoose = (event) => {
    const {
      target: { value }, // middle final extra 중 하나
    } = event;
    if(value === "0" || value === "1"){
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

    countNum(event);
};

const countNum = (event) => { 
    let num;
    if(opened === "1"){
        num = document.getElementById("length_" + type).innerText;

    }
    else if(opened === "0" || opened === 0){
        num = document.getElementById("myLength_" + type).innerText;
    }
    num = Number(num);// 해당 옵션에서 풀 수 있는 문제 수
    let select = document.getElementById("select");
    for(let i =  select.length - 1; i > 0; i--){ 
        select.options[i] = null;
   }
    for(let i = 1; i <= num; i++){ // option추가를 마저 해야함
        let option = document.createElement("option");   
        option.text = i + "개";
        option.value = i;
        select.options.add(option);
   }
};

const handlePoint = (event) => {
    console.log(opened);
    const num = document.getElementById("select");
    console.log(num.value);
    if(opened){
        const point = num.value*5;
        if (!confirm(` ${point} 포인트가 사용됩니다`)) {
            event.revert();
        } 
        else if(point > parseInt(myPoint.innerText)) {
            alert("포인트가 부족합니다.")
            event.revert();
        }
        else{
            console.log("문제없음")
            myPoint.innerText = parseInt(myPoint.innerText) - point;
        }
    }
}
window.onload = countNum;
radio1.addEventListener("change", handleChoose);
radio2.addEventListener("change", handleChoose); 
radio3.addEventListener("change", handleChoose); 
radio4.addEventListener("change", handleChoose); 
radio5.addEventListener("change", handleChoose); 
startbtn.addEventListener("click", handlePoint);

const form = document.getElementById("testSettingForm");

const checkSelect = (event) => {
    console.log(event);
    const value = select.value;
    if(value === "0"){
        form.onsubmit = "return false";
    }
    else{
        console.log("통과"); 
        form.onsubmit = "return true";
        form.submit();
    }
}

form.addEventListener("submit", checkSelect);