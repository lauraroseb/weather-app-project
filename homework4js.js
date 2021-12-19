let now = new Date();

let currentDate = document.querySelector("#currentDate");

let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

currentDate.innerHTML = `${day} ${date}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let SearchInput = document.querySelector("#search-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `Searching for ${searchInput.value}`;
}

let form = document.querySelector("#search-input");
form.addEventListener("submit", search);
