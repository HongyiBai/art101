// Lab 8: Anon Functions and Callbacks
// Write functions with callbacks
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 8 May 2023

// Get the output <div> and assign it to a variable
var outputEl = document.getElementById("output");

// Create a new <p> element and assign it to a variable
var new1El = document.createElement("p");

// Change the html attribute of new1El
new1El.innerHTML = "Hi, I'm Hongyi Bai.";

// Create another new <p> element and assign it to a variable
var new2El = document.createElement("p");

// Change the html attribute of new2El
new2El.innerHTML = "Hi, I'm Mingze Li.";

// Append both new elements to the output <div> one at a time
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the CSS attributes of at least two elements of the page
new2El.style.fontSize = "30pt";
new2El.style.color = "red";

new1El.style.fontSize = "60pt"
new1El.style.color = "blue"

