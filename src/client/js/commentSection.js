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
    // console.log(response);
    textArea.value = "";
    if (response.status === 201) {
      textArea.value = "";
      const { newCommentId } = await response.json();
      // console.log(newCommentId);
      addComment(text, newCommentId);
    }
};
const handleDelete = async(event) =>{
  const commentList = event.target.parentNode.parentNode;
  const id = commentList.dataset.id;

  const response = await fetch(`/api/posting/${postingId}/comment`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  // console.log(response);
  if (response.status === 202) {
    // const { deletedId } = await response.json();
    deleteComment(event);
  }
}
const deleteComment = (event) =>{
  const commentContainer = document.querySelector(".posting__comments ul");
  const commentList = event.target.parentNode.parentNode;
  commentContainer.removeChild(commentList); 

}

const addComment = (text, id) => {
    const postingComments = document.querySelector(".posting__comments ul");
    const newComment = document.createElement("li");
    newComment.className = "posting__comment";
    newComment.dataset.id = id;
    const leftBox = document.createElement("div");
    leftBox.className = "comment__left";
    const rightBox = document.createElement("div");
    rightBox.className = "comment__right";

    const username = document.createElement("h4");
    username.innerText = "NEW!";

    const span = document.createElement("span");
    span.innerText = ` ${text}`;
    const createdAt = document.createElement("h5");
    const today = new Date;
    const month = (today.getMonth() > 8) ? today.getMonth() + 1 : `0${today.getMonth() + 1}`;
    const date = (today.getDate() > 9) ? today.getDate()  : `0${today.getDate()}`;
    const hours = (today.getHours() > 9) ? today.getHours()  : `0${today.getHours()}`;
    const minutes = (today.getMinutes() > 9) ? today.getMinutes()  : `0${today.getMinutes()}`;
    createdAt.innerText = `${today.getFullYear()}/${month}/${date}/${hours}:${minutes}`;
    createdAt.setAttribute("class", "posting__info");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "comment__deleteButton");
    deleteButton.addEventListener("click", e => handleDelete(id));
    deleteButton.innerText = "X";

    leftBox.appendChild(username);
    leftBox.appendChild(span);
    rightBox.appendChild(createdAt);
    rightBox.appendChild(deleteButton);

    newComment.appendChild(leftBox);
    newComment.appendChild(rightBox);
    postingComments.appendChild(newComment);
    deleteButton.addEventListener("click", handleDelete);
  };



if(form){
    form.addEventListener("submit", handleSubmit);
}
if(deleteButtons){
 for(let i = 0; i < deleteButtons.length; i++){
  deleteButtons[i].addEventListener("click", handleDelete);
 }
}