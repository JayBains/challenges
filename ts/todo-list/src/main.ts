import "../styles/styles.scss";

let taskCount = document.querySelector<HTMLParagraphElement>("#counter");
let addBtn = document.querySelector<HTMLButtonElement>("#add-button");
let input = document.querySelector<HTMLInputElement>("#new-task");
let ul = document.querySelector<HTMLUListElement>("#the-prophecy");

if (!taskCount || !addBtn || !input || !ul) {
  throw new Error("missing elm");
}
const taskArr: string[] = [];

addBtn.addEventListener("click", (event) => {
  createli(taskCount);
  return event;
});

function createli(taskCount: HTMLParagraphElement) {
  if (!input || !ul) {
    throw new Error("input, ul");
  }

  let newAddition = input.value;
  if (newAddition.length !== 0) {
    taskArr.push(newAddition);
    taskCount.textContent = `Tasks: ${taskArr.length}`;
    let li = document.createElement("li");
    li.textContent = newAddition;
    ul.appendChild(li);
    input.value = "";
  }
  console.log(taskArr);
}
