const postingBody = document.getElementsByClassName("posting__body")[0];
const form = document.getElementById("commentForm");
const deleteButtons = document.getElementsByClassName("comment__deleteButton");
const postingId = postingBody.dataset.id;
const handleSubmit = async (event) =>{
  event.preventDefault();
  const textArea = form.querySelector("textarea");
  const text = textArea.value;
    if (text === "") {
        return;
      }
    const response = await fetch(`/api/posting/${postingId}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
    });
    console.log(response);
    textArea.value = "";
    if (response.status === 201) {
      textArea.value = "";
      const { newCommentId } = await response.json();
      console.log(newCommentId);
      addComment(text, newCommentId);
    }
};
const handleDelete = async(id) =>{
  const response = await fetch(`/api/posting/${postingId}/comment`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  console.log(response);
  if (response.status === 202) {
    const { deletedId } = await response.json();
    deleteComment(deletedId);
  }
}

const addComment = (text, id) => {
    const postingComments = document.querySelector(".posting__comments ul");
    const newComment = document.createElement("li");
    newComment.className = "posting__comment";
    newComment.dataset.id = id;
    const username = document.createElement("h4");
    const nameIcon = document.createElement("h5");
    nameIcon.innerText = "NEW!";
    const span = document.createElement("span");
    span.innerText = ` ${text}`;
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "comment__deleteButton");
    deleteButton.addEventListener("click", e => handleDelete(id));
    deleteButton.innerText = "X";
    username.appendChild(nameIcon);
    newComment.appendChild(username);
    newComment.appendChild(span);
    newComment.appendChild(deleteButton);
    postingComments.appendChild(newComment);
  };

const deleteComment = (id) =>{
  console.log("??", id);
  const comments = document.getElementsByClassName("posting__comment");

  for (let i = 0; i < comments.length; i++) {
    let commentId = comments[i].getAttribute('data-id');

    if (String(commentId) === String(id)) {
      comments[i].remove();
    }
  }
}


if(form){
    form.addEventListener("submit", handleSubmit);
}
if(deleteButtons){
 for(let i = 0; i < deleteButtons.length; i++){
  deleteButtons[i].addEventListener("click", e => handleDelete(deleteButtons[i].parentElement.dataset.id));
 }
}