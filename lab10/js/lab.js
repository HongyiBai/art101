// Lab 10: JavaScript Events and Forms
// Working with your partner, experiment with JS events.
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 15 May 2023

// Sorted function
function sortUserName(name){
    

    
    return name.split("").sort().join("");
    

}

// Get the button from html
var button = document.getElementById("my-button");

// Get the output from html
var output = document.getElementById("output");
      
// Attach an event listener to the button
button.addEventListener('click', function() {
    // Get the input
    var input = document.getElementById("user-name").value;
    // Run the value through the sorting function and save in a variable
    var result = sortUserName(input);
    // Replace it in html 
    output.innerHTML = result;
  });