let pageNext = document.getElementById('next');

next.addEventListener('click', function() {
document.getElementById("nextPageNumber").innerHTML =
Math.floor(Math.random() * 999) + 1;

document.getElementById("backPageNumber").innerHTML =
Math.floor(Math.random() * 999) + 1;

document.getElementById("progress").innerHTML =
Math.floor(Math.random() * 100) + 1 + "% Complete";

});

let pageBack = document.getElementById('back');

back.addEventListener('click', function() {
document.getElementById("backPageNumber").innerHTML =
Math.floor(Math.random() * 999) + 1;

document.getElementById("nextPageNumber").innerHTML =
Math.floor(Math.random() * 999) + 1;

document.getElementById("progress").innerHTML =
Math.floor(Math.random() * 100) + 1 + "% Complete";
});

let excerpt = document.getElementById('excerpt');
excerpt.addEventListener('click', function() {
document.getElementById("excerptText").innerHTML =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
});

let excerptText = "[defined by the javascript, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]";



const texts = [
  "Jorge Francisco Isidoro Luis Borges (/ˈbɔːrhɛs/ BOR-hess; Spanish: [ˈxoɾxe ˈlwis ˈboɾxes]; 24 August 1899 – 14 June 1986) was an Argentine short-story writer, essayist, poet and translator regarded as a key figure in Spanish-language and international literature.",
  "Born in Buenos Aires, Borges later moved with his family to Switzerland in 1914, where he studied at the Collège de Genève.",

  "On his return to Argentina in 1921, Borges began publishing his poems and essays in surrealist literary journals.",

  "His 1929 book Cuaderno San Martín includes the poem Isidoro Acevedo, commemorating his grandfather, Isidoro de Acevedo Laprida, a soldier of the Buenos Aires Army.",
];

const output = document.querySelector("#text");
const nextPageButton = document.querySelector("#nextPageNumber");
nextPageButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  output.textContent = texts[randomIndex];
});

const backPageButton = document.querySelector("#backPageNumber");
backPageButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  output.textContent = texts[randomIndex];
});

let pageNext = document.getElementById('next');

next.addEventListener('click', function() {
document.getElementById("nextPageNumber").innerHTML =
Math.floor(Math.random() * 999) + 1;

document.getElementById("backPageNumber").innerHTML =
Math.floor(Math.random() * 999) + 1;

document.getElementById("progress").innerHTML =
Math.floor(Math.random() * 100) + 1 + "% Complete";

});

let pageBack = document.getElementById('back');

back.addEventListener('click', function() {
document.getElementById("backPageNumber").innerHTML =
Math.floor(Math.random() * 999) + 1;

document.getElementById("nextPageNumber").innerHTML =
Math.floor(Math.random() * 999) + 1;

document.getElementById("progress").innerHTML =
Math.floor(Math.random() * 100) + 1 + "% Complete";
});