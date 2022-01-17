const postingBody = document.getElementsByClassName("posting__body")[0];
const form = document.getElementById("commentForm");
const textArea = form.querySelector("textarea");

const handleSubmit = async (event) =>{
    event.preventDefault();
    const postingId = postingBody.dataset.id;
    const text = textArea.value;
    if (text === "") {
        return;
      }
    const { status } = await fetch(`/api/posting/${postingId}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
    });
    textArea.value = "";
    if (status === 201) {
        addComment(text);
    }
};

const addComment = (text) => {
    const postingComments = document.querySelector(".posting__comments ul");
    const newComment = document.createElement("li");
    newComment.className = "posting__comment";
    const icon = document.createElement("i");
    icon.className = "fas fa-comment";
    const span = document.createElement("span");
    span.innerText = ` ${text}`;
    newComment.appendChild(icon);
    newComment.appendChild(span);
    postingComments.prepend(newComment);
  };


if(form){
    form.addEventListener("submit", handleSubmit);
}