const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$(".content__item");
const itemActive = $(".content__item-active");
const contentItems = $$(".content__item-wrap");

items.forEach(function (item, index) {
    const contentItem = contentItems[index];

    item.onclick = function () {
        $(".content__item.content__item-active").classList.remove("content__item-active");
        $(".content__item-wrap.active").classList.remove("active");

        // line.style.left = this.offsetLeft + "px";
        // line.style.width = this.offsetWidth + "px";
        
        this.classList.add("content__item-active");
        contentItem.classList.add("active");
        }
    }
)


const main = {
  quotes: [
    {
      src: "./assets/img/J. R. R. Tolkein.jpg",
      name: "J.R.R.Tolkein",
      quote: "Not all those who wander are lost."
    },
    
    {
      src: "./assets/img/Benjamin Franklin.jpg",
      name: "Benjamin Franklin",
      quote: "Three can keep a secret, if two of them are dead."
    },
    
    {
      src: "./assets/img/Seth Godin.jpg",
      name: "Seth Godin",
      quote: "Three can keep a secret, if two of them are dead."
    }
  ]
};

function quoteWrap(quote) {
  return `
    <div class="content__quote-img">
      <i class="fa-solid fa-crown content__quote-icon"></i>
      <img src="${quote.src}" alt="${quote.name}">
    </div>
    <div class="content__quote-text">
      <p>${quote.name}</p>
      <span>${quote.quote}</span>
    </div>
    <div class="change-quote">
        <div class="btn btn-prev">
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="btn btn-next">
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
  `;
}

var currentIndex = 0
function displayQuotesSequentially(quotesArray, currentIndex) {
  function displayNextQuote() {
    if (currentIndex < quotesArray.length) {
      const quote = quotesArray[currentIndex];
      const replacedHtml = quoteWrap(quote);

      $(".content__quote-wrap").innerHTML = replacedHtml;

      currentIndex = (currentIndex + 1) % main.quotes.length;
      setTimeout(displayNextQuote, 6000); // 60000 milliseconds = 1 minute
    }
  
  }
  displayNextQuote();
}

// Bắt đầu hiển thị các quotes
displayQuotesSequentially(main.quotes, currentIndex);

const btnNext = $(".btn-next")
if (btnNext) {
  btnNext.addEventListener("click", () => { 
    currentIndex = (currentIndex + 1 + main.quotes.length) % main.quotes.length;
    displayQuotesSequentially(main.quotes, currentIndex);
  })
};

const btnPrev = $(".btn-prev")
if (btnPrev) {
  btnPrev.addEventListener("click", () => { 
    currentIndex = (currentIndex - 1 + main.quotes.length) % main.quotes.length;
    displayQuotesSequentially(main.quotes, currentIndex);
  })
};
