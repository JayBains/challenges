import { companies } from "./data";
console.log(companies);

const button = document.getElementById("render-companies") as HTMLElement;
const cardContainer = document.getElementById(
  "companies-container"
) as HTMLElement;

const createCard = () => {
  cardContainer.innerHTML = "";

  companies.forEach((element) => {
    const card = document.createElement("div");
    const name = document.createElement("h3");
    const industry = document.createElement("p");
    const start = document.createElement("p");
    const end = document.createElement("p");

    name.appendChild(document.createTextNode(`Company name: ${element.name}`));
    industry.appendChild(document.createTextNode(`Ind: ${element.industry}`));
    start.appendChild(document.createTextNode(`Start: ${element.start}`));
    end.appendChild(document.createTextNode(`End: ${element.end}`));

    card.appendChild(name);
    card.appendChild(industry);
    card.appendChild(start);
    card.appendChild(end);

    cardContainer.appendChild(card);
  });
};
button.addEventListener("click", createCard);
console.log(button);

// //alternative approach
// const handleRender = () => {
//   if (cardContainer.innerHTML === "") {
//     companies.forEach(({ name, industry, start, end }) => {
//       cardContainer.innerHTML += `<div>
// <h2>${name}</h2>
// <p>${industry}</p>
// <p>${start}</p>
// <p>${end}</p>
// </div>`;
//     });
//   }
// };

// button.addEventListener("click", handleRender);
