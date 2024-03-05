"use strict";

let darkMode = $(".darkmode");
let darkModeSwitch = $(".darkmode-switch");
let cards = $(".cards");
let search = $("#header_search");
let baseURL =
  "https://www.googleapis.com/books/v1/volumes?q=computer science&startIndex=0&maxResults=21";

async function getData() {
  let res = await fetch(baseURL);
  let result = await res.json();
  console.log(result);
  renderData(result);
  getSearch(result)
}
getData();

darkModeSwitch.addEventListener("click", () => {
  darkMode.classList.toggle("darkmode");

  if (darkMode.classList.contains("darkmode")) {
    darkModeSwitch.style.color = "black";
  } else {
    darkModeSwitch.style.color = "yellow";
  }
});

function renderData(result) {
  cards.innerHTML = "";
  result.items.forEach((item) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="" />
      <div class="card-text">
        <h3>${item.volumeInfo.title.slice(5, 15)}</h3>
        <span>${
          item.volumeInfo.authors ? item.volumeInfo.authors[0] : "Unknown"
        }</span>
        <p>${item.volumeInfo.publishedDate}</p>
      </div>
      <div class="card-button">
        <button class="card-button1">Bookmark</button>
        <button class="card-button2">More Info</button>
      </div>
      <button class="card-button3">Read</button>
    `;
    cards.appendChild(div);
  });
}

function getSearch(result) {
  search.addEventListener("keyup", (e) => { 
    if(e.item.title.toLocaleLowerCase().includes(search.value)){
      console.log(e);
    }
  });
}

