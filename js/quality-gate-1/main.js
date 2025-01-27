// Write a function titleCase that converts a sentence to title case (the first letter of each word capitalised).

const toTitleCase = (x) => {
  let newArr = x.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i - 1] === " " || i === 0) {
      newArr[i] = newArr[i].toUpperCase();
    }
  }
  return newArr.join("");
};

console.log(toTitleCase("one two three"));
