// Lab 12: Conditionals
// Working with your partner, create a function that depends on conditionals.
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 23 May 2023

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff denpending on length mod 4
function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    
    if (mod === 0) {
      return "Gryffindor";
    } else if (mod === 1) {
      return "Ravenclaw";
    } else if (mod === 2) {
      return "Slytherin";
    } else if (mod === 3) {
      return "Hufflepuff";
    }
  }

  var myButton = document.getElementById("button").addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
  });