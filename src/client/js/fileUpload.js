const form = document.getElementById("upload");
const fileInput = document.getElementById("file");
const fileBox = document.getElementsByClassName("file__objBox")[0];
// const link = document.location.href;
// const para = link.split("/");
// const url = "/subject/"+para[4]+"/community/upload";

const checkFile = (event,input) => {
    const files = event.target.files;
    console.log(event.target.result);
    console.log(files);
    
    if(files.length > 5){
        alert("파일이 5개를 초과하였습니다.");
        fileInput.value = null;   
        onsubmit="return false";     
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
                const reader = new FileReader();
                reader.onload = e => {
                    imgSample.src = e.target.result;
                }
                reader.readAsDataURL(files[i]);
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
                // form.onsubmit = "return true";
                console.log(fileBox);
            }


            ////
            // // for(let i = 0; i < files.length; i++){
            //     let file = document.createElement("div");
            //     file.setAttribute("class", "fileObj");
                
            //     const fileArr = Array.from(input.files);
                
            //     const colDiv = document.createElement("div");
            //     fileArr.forEach((aaa, index) => {
                    
            //         const reader = new FileReader();
            //         let file_left = document.createElement("div");
            //         file_left.setAttribute("class", "fileObj__left");
            //         let imgDiv = document.createElement("div");
            //         let imgSample = document.createElement("img");
            //         imgSample.setAttribute("class", "fileObj__sample");
            //         let fileName = document.createElement("h4");
            //         fileName.setAttribute("class", "fileObj__name");
            //         fileName.innerText = files[index].name;
            //         imgDiv.appendChild(imgSample);
            //         // imgDiv.appendChild(fileName);
            //         reader.onload = e => {
            //             imgSample.src = e.target.result;
            //             imgDiv.style.width = (imgSample.naturalWidth) * 0.2 + "px";
            //             imgDiv.style.height = (imgSample.naturalHeight) * 0.2 + "px";
            //         }
            //         file_left.appendChild(imgDiv);
            //         file_left.appendChild(fileName);
            //         const deleteButton = document.createElement("button");
            //         deleteButton.setAttribute("class", "fileObj__delete");
            //         deleteButton.innerText = "X"; // 이게 눌릴경우 addeventListner로 받아서 file value값을 바꿔줘야함
            //         colDiv.appendChild(file_left);
            //         colDiv.appendChild(deleteButton);
            //         reader.readAsDataURL(aaa);       
            //     })

                
                
            //     //imgSample.setAttribute("src", files[i].result ); // 이걸맞는값을  찾아야함 그리고 동영상일 경우 생각해야함 캡쳐화면을 띄우는걸 찾던지..
            //     file.appendChild(colDiv);      
            //     console.log(fileBox);
            //     fileBox.appendChild(file);
            // }

        }catch(error){
            console.log(error);
        }
    }
}
fileInput.addEventListener("change", e => {
    checkFile(e,e.target) 
})


// function readMultipleImage(input) {
//     const multipleContainer = document.getElementById("file__obj")
    
//     // 인풋 태그에 파일들이 있는 경우
//     if(input.files) {
//         // 이미지 파일 검사 (생략)
//         console.log(input.files)
//         // 유사배열을 배열로 변환 (forEach문으로 처리하기 위해)
//         const fileArr = Array.from(input.files)
//         const $colDiv1 = document.createElement("div")
//         const $colDiv2 = document.createElement("div")
//         $colDiv1.classList.add("column")
//         $colDiv2.classList.add("column")
//         fileArr.forEach((file, index) => {
//             const reader = new FileReader()
//             const $imgDiv = document.createElement("div")   
//             const $img = document.createElement("img")
//             $img.classList.add("image")
//             const $label = document.createElement("label")
//             $label.classList.add("image-label")
//             $label.textContent = file.name
//             $imgDiv.appendChild($img)
//             $imgDiv.appendChild($label)
//             reader.onload = e => {
//                 $img.src = e.target.result
                
//                 $imgDiv.style.width = ($img.naturalWidth) * 0.2 + "px"
//                 $imgDiv.style.height = ($img.naturalHeight) * 0.2 + "px"
//             }
            
//             console.log(file.name)
//             if(index % 2 == 0) {
//                 $colDiv1.appendChild($imgDiv)
//             } else {
//                 $colDiv2.appendChild($imgDiv)
//             }
            
//             reader.readAsDataURL(file)
//         })
//         multipleContainer.appendChild($colDiv1)
//         multipleContainer.appendChild($colDiv2)
//     }
// }
// fileInput.addEventListener("change", e => {
//     readMultipleImage(e.target)
// })


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

