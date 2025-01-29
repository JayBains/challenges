import "../styles/styles.scss";

let taskCount = document.querySelector<HTMLParagraphElement>(".counter");
let addBtn = document.querySelector<HTMLButtonElement>(".card__add-button");
let input = document.querySelector<HTMLInputElement>(".card__new-task");
let ul = document.querySelector<HTMLUListElement>(".prophecy");

if (!taskCount || !addBtn || !input || !ul) {
  throw new Error("missing elm");
}

addBtn.addEventListener("click", (event) => {
  createli(taskCount);
  return event;
});

const taskArr: string[] = [];

function createli(taskCount: HTMLParagraphElement) {
  if (!input || !ul) {
    throw new Error("input, ul");
  }

  let text = input.value;
  if (text.length > 2) {
    taskArr.push(text);
    taskCount.textContent = `Tasks: ${taskArr.length}`;

    let li = document.createElement("li");
    let delBtn = Object.assign(document.createElement("button"), {
      className: "prophecy__delete",
    });
    delBtn.appendChild(document.createTextNode("Delete"));

    li.textContent = text;
    li.appendChild(delBtn);
    ul.appendChild(li);

    input.value = "";

    delBtn.addEventListener("click", (event) => {
      const index = taskArr.findIndex((item) => item === text);
      taskArr.splice(index, 1);
      ul.removeChild(li);
      taskCount.textContent = `Tasks: ${taskArr.length}`;
      console.log(index, taskArr);
      return event;
    });
  }
  console.log(taskArr);
}
