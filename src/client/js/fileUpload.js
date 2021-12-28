const form = document.getElementById("upload");
const fileInput = document.getElementById("file");
const fileBox = document.getElementsByClassName("file__objBox")[0];
// const link = document.location.href;
// const para = link.split("/");
// const url = "/subject/"+para[4]+"/community/upload";

const checkFile = (event) => {
    const files = event.target.files;
    console.log(event.target.result);
    console.log(files);
    if(files.length > 5){
        alert("파일이 5개를 초과하였습니다.");
        fileInput.value = null;        
    }
    else{// 이름이 뜨게해둠 앞으로 파일들 작은 미리보기 이미지나 삭제 버튼 추가구현 할 예정
        try{
            for(let i = 0; i < files.length; i++){
                let file = document.createElement("div");
                file.setAttribute("class", "fileObj");

                let file_left = document.createElement("div");
                file_left.setAttribute("class", "fileObj__left");
                
                const imgSample = document.createElement("img");
                imgSample.setAttribute("class", "fileObj__sample");
                imgSample.setAttribute("src", files[i].result); // 이걸맞는값을  찾아야함 그리고 동영상일 경우 생각해야함 캡쳐화면을 띄우는걸 찾던지..

                const fileName = document.createElement("h4");
                fileName.setAttribute("class", "fileObj__name");
                fileName.innerText = files[i].name;

                const deleteButton = document.createElement("button");
                deleteButton.setAttribute("class", "fileObj__delete");
                deleteButton.innerText = "X"; // 이게 눌릴경우 addeventListner로 받아서 file value값을 바꿔줘야함
                
                file_left.appendChild(imgSample);
                file_left.appendChild(fileName);
                file.appendChild(file_left);
                file.appendChild(deleteButton);
                fileBox.appendChild(file);
                console.log(fileBox);
            }
        }catch(error){
            console.log(error);
        }
    }
}
fileInput.addEventListener("input", checkFile);


// const checkFile = (event) => { // 아마 지울예정
//     const file =  document.getElementById("file");
//     let confirm = true;

//     console.log(file.value);
//     console.log(file.files);
//     console.log(form.file);

//     if (!file.value){ // 미디어 파일이 없는 경우
//         form.onsubmit = true;
//         form.submit();
//     } els

//     for(let i = 0; i < file.value.length; i++){
//         if(file.value[i].match(/(.*?)\.(jpg|jpeg|png|gif|bmp|pdf)$/gi)){ // 이렇게 하니까 안돌아가짐
//             let hidden = document.createElement("input");
//             hidden.setAttribute("name", "fileType");
//             hidden.setAttribute("value", "img");
//             form.appendChild(hidden);
    
//         } else if(file.value[i].match(/(.*?)\.(avi|mp4|wmv|mov)$/gi)) {
//             let hidden = document.createElement("input");
//             hidden.setAttribute("name", "fileType");
//             hidden.setAttribute("value", "video");
//             form.appendChild(hidden);
//         }else{ // 이미지도 비디오도 아닌경우
//             confirm = false;
//             alert("잘못된 파일을 선택했습니다.")
//             window.reload();
//         }
//     }
//     console.log(form);
//     if(confirm){
//         form.onsubmit = true;
//         form.submit();
//     }
    
// }

// form.addEventListener("submit", checkFile); // 갯수 5개 넘으면 제출 안해주기

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
