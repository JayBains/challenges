import "../styles/styles.scss";
// import { taskObj } from "./object.ts";

let taskCount = document.querySelector<HTMLParagraphElement>("#counter");
let addBtn = document.querySelector<HTMLButtonElement>("#add-button");
let input = document.querySelector<HTMLInputElement>("#new-task");
let ul = document.querySelector<HTMLUListElement>("#the-prophecy");

// const taskArr: taskObj[] = [];
const taskArr: string[] = [];

function setupList(taskCount: HTMLParagraphElement) {
  if (!addBtn || !input || !ul) {
    throw new Error("missing elm");
  }

  addBtn.addEventListener("click", () => {
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
  });
}

setupList(taskCount!);
