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




