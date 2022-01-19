const form = document.getElementById("upload");
const delBtn = document.getElementsByClassName("fileObj__delete2");

const deleteFile2 = (i, text) =>{
    console.log(text);
    const editedFilesInput = document.createElement("input");
    editedFilesInput.setAttribute("style", "display:none;");
    editedFilesInput.setAttribute("name", "editedFile");
    editedFilesInput.setAttribute("value", text);
    form.appendChild(editedFilesInput);
    delBtn[i].parentElement.remove();
    // if(delBtn.length < 1){
        
    // }

}

for(let i = 0; i < delBtn.length; i++){
    delBtn[i].addEventListener("click", e => deleteFile2(i, delBtn[i].parentElement.dataset.name));
}