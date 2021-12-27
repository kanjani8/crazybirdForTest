const form = document.getElementById("upload");

// const link = document.location.href;
// const para = link.split("/");
// const url = "/subject/"+para[4]+"/community/upload";


const checkFile = (event) => {
    const file =  document.getElementById("file");
    let confirm = true;

    console.log(file.value);
    console.log(form.file);

    if (!file.value){ // 미디어 파일이 없는 경우
        form.onsubmit = true;
        form.submit();
    }

    for(let i = 0; i < file.value.length; i++){
        if(file.value[i].match(/(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/gi)){ // 이렇게 하니까 안돌아가짐
            let hidden = document.createElement("input");
            hidden.setAttribute("name", "fileType");
            hidden.setAttribute("value", "img");
            form.appendChild(hidden);
    
        } else if(file.value[i].match(/(.*?)\.(avi|mp4|wmv|mov)$/gi)) {
            let hidden = document.createElement("input");
            hidden.setAttribute("name", "fileType");
            hidden.setAttribute("value", "video");
            form.appendChild(hidden);
        }else{ // 이미지도 비디오도 아닌경우
            confirm = false;
            alert("잘못된 파일을 선택했습니다.")
            window.reload();
        }
    }
    console.log(form);
    if(confirm){
        form.onsubmit = true;
        form.submit();
    }
    
}

form.addEventListener("submit", checkFile);

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
