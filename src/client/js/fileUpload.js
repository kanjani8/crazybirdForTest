const writeBtn =  document.getElementById("writeBtn");
const form1 = document.getElementById("fm1");

const link = document.location.href;
const para = link.split("/");
const url = "/subject/"+para[4]+"/community/upload";


const handleWrite = (event) => {
    const file =  document.getElementById("file");

    console.log(file.value);
    
    console.log(url);
    if(file.value.match(/(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/gi)){
        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action",url);
        let hidden = document.createElement("input");
        hidden.setAttribute("name", "fileType");
        hidden.setAttribute("value", "1");
        hidden.setAttribute("id", "fm2");
        form.appendChild(hidden);
        console.log(form.innerHTML);
        document.body.append(form);
        document.body.append(form1);
        form.onsubmit = true;
        form.submit();
    } else {
        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action",url);
        let hidden = document.createElement("input");
        hidden.setAttribute("name", "fileType");
        hidden.setAttribute("value", "2");
        form.appendChild(hidden);
        document.body.append(form,form1);
        form.onsubmit = true;
        form.submit();
    }
    alert("프론트엔드 콘솔 확인용");
}

// function auth() {
//     var formData = $('#fm1,#fm2').serialize() // serialize 사용
//     console.log(formData) // password = 5151
//     $.ajax({
//         url: url,
//         type: "POST",
//         cache: false,
//         data: formData, // data에 바로 serialze한 데이터를 넣는다.
//         success: function(data){
//             console.log(data)
//         },
//         error: function (request, status, error){        
//             console.log(error)
//         }
//     }) 
// } 

writeBtn.addEventListener("click", handleWrite);