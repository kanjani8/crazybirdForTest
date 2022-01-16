const postingBody = document.getElementsByClassName("posting__body")[0];
const form = document.getElementById("commentForm");
const textArea = form.querySelector("textarea");

const handleSubmit = (event) =>{
    event.preventDefault();
    const postingId = postingBody.dataset.id;
    const text = textArea.value;
    fetch(`/api/posting/${postingId}/comment`, {
        method: "POST",
        header: {
            "Content-Type" : "application/json",
        },
        body:  text,
    });
};

if(form){
    form.addEventListener("submit", handleSubmit);
}