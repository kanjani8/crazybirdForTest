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
    const username = document.createElement("h4");
    username.innerText = ` 익명의 학생`;
    const span = document.createElement("span");
    span.innerText = ` ${text}`;
    newComment.appendChild(username);
    newComment.appendChild(span);
    postingComments.appendChild(newComment);
  };


if(form){
    form.addEventListener("submit", handleSubmit);
}