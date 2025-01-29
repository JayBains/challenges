import "../styles/styles.scss";

let greeting = document.querySelector<HTMLHeadingElement>(".timeGreet");
let newQuote = document.querySelector<HTMLHeadingElement>(".quote");
let taskCount = document.querySelector<HTMLParagraphElement>(".counter");
let addBtn = document.querySelector<HTMLButtonElement>(".card__add-button");
let input = document.querySelector<HTMLInputElement>(".card__new-task");
let ul = document.querySelector<HTMLUListElement>(".prophecy");

if (!greeting || !newQuote || !taskCount || !addBtn || !input || !ul) {
  throw new Error("missing elm");
}

const taskArr: string[] = [];
let date = new Date();
let hour = date.getUTCHours();

function handleWelcomeMessage() {
  if (!greeting) {
    throw new Error("missing elm");
  }

  if (hour >= 6 && hour < 11) {
    greeting.textContent = `Good Morning`;
  } else if (hour >= 12 && hour < 18) {
    greeting.textContent = `Good Afternoon`;
  } else if (hour >= 18 && hour < 22) {
    greeting.textContent = "Good evening";
  } else if (hour >= 22 && hour < 2) {
    greeting.textContent = "Prepare for bed";
  } else {
    greeting.textContent =
      "A fully grown adult typically needs between 7 and 9 hours of sleep per night";
  }
}

const getYeQuote = async () => {
  const response = await fetch("https://api.kanye.rest");
  const data = await response.json();
  console.log(data);
  newQuote.textContent = data.quote;
};

addBtn.addEventListener("click", (event) => {
  handleCreateList(taskCount);
  return event;
});

function handleCreateList(taskCount: HTMLParagraphElement) {
  if (!input || !ul) {
    throw new Error("input, ul");
  }

  let text = input.value;
  if (text.length > 2) {
    taskArr.push(text);
    taskCount.textContent = `Tasks: ${taskArr.length}`;

    let li = document.createElement("li");
    let delBtn = document.createElement("button");

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

handleWelcomeMessage();
getYeQuote();
