function moduleProject1() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  let widgets = document.querySelectorAll("section>div");
  widgets.forEach((element) => {
    element.classList.add("widget");
  });

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomNumber = Math.floor(Math.random() * 10);
  const randomQuote = quotes[randomNumber];
  const quote = document.createElement("div");
  const quoteText = randomQuote["quote"];
  quote.textContent = quoteText;
  const widget1 = document.querySelector(".quoteoftheday");
  widget1.appendChild(quote);

  const author = document.createElement("div");
  const randomAuthor = randomQuote["author"];
  const randomDate = randomQuote["date"];
  if (randomDate === null) {
    author.textContent = `${randomAuthor} in an unknown date`;
  } else {
    author.textContent = `${randomAuthor} in ${randomDate}`;
  }
  widget1.appendChild(author);

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomVerb = () => {
    let randomNumber = Math.floor(Math.random() * verbs.length);
    return verbs[randomNumber];
  };
  const randomAdverb = () => {
    let randomNumber = Math.floor(Math.random() * adverbs.length);
    return adverbs[randomNumber];
  };
  const randomNoun = () => {
    let randomNumber = Math.floor(Math.random() * nouns.length);
    return nouns[randomNumber];
  };

  const speak = document.createElement("p");
  speak.textContent = `We need to ${randomVerb()} our ${randomNoun()} ${randomAdverb()} in order to ${randomVerb()} our ${randomNoun()} ${randomAdverb()}.`;
  const widget2 = document.querySelector(".corporatespeak");
  widget2.appendChild(speak);

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const widget3 = document.querySelector(".countdown");
  let count = 5;
  const countdown = document.createElement("p");
  countdown.textContent = `T-minus ${count}...`;
  widget3.appendChild(countdown);

  const id = setInterval(() => {
    if (count === 1) {
      countdown.textContent = "Liftoff!";
      clearInterval(id)
    } else {
      countdown.textContent = `T-minus ${--count}...`;
    }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject1 };
else moduleProject1();
