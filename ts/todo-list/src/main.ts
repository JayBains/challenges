import "../styles/styles.scss";

let taskCount = document.querySelector<HTMLParagraphElement>("#counter");
let addBtn = document.querySelector<HTMLButtonElement>("#add-button");
let input = document.querySelector<HTMLInputElement>("#new-task");
let ul = document.querySelector<HTMLUListElement>("#the-prophecy");

const taskArr: string[] = [];

function setupCounter(taskCount: HTMLParagraphElement) {
  if (!addBtn || !input || !ul) {
    throw new Error("missing elm");
  }

  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    taskCount.textContent = `Tasks: ${counter}`;
  };

  addBtn.addEventListener("click", () => {
    let newAddition = input.value;
    if (newAddition.length !== 0) {
      taskArr.push(newAddition);
    }

    for (let i = 0; i < taskArr.length; i++) {
      let li = document.createElement("li");
      li.textContent = taskArr[i];
      ul.appendChild(li);
    }
    setCounter(counter + 1);
    input.value = "";
    console.log(taskArr);
  });

  setCounter(0);
}

setupCounter(taskCount!);
