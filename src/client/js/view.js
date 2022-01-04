const videoContainer = document.getElementsByClassName("posting__body")[0];

const viewAdd= () =>{
    const { id } = videoContainer.dataset;
    fetch(`http://localhost:4000/api/subject/${id}/view`, {
        method: "POST",
       });
}
window.addEventListener("load",viewAdd);