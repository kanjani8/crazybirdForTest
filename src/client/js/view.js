const videoContainer = document.getElementsByClassName("posting__body")[0];

const viewAdd= () =>{
    const { id } = videoContainer.dataset;
    fetch(`/api/subject/${id}/view`, {
        method: "POST",
       });
}
window.addEventListener("load",viewAdd);