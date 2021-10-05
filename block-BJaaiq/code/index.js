let quotesElm = document.querySelector(".quotes");
let counter = 0;

let limit = 1;
let current = 0;

function handleScroll() {
  if (current > limit) addQuote(1);
  else current++;
}

function addQuote(n) {
  for (let i = counter; i < counter + n; i++) {
    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    h1.innerText = quotes[i].quoteText;
    let p = document.createElement("p");
    p.innerText = quotes[i].quoteAuthor;
    li.append(h1, p);
    quotesElm.append(li);
  }
  if (counter === quotesElm.length) counter = 0;
  else counter += n;
}

window.addEventListener("load", () => addQuote(15));
window.addEventListener("scroll", handleScroll);
