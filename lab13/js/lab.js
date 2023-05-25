// Lab 13: Loops
// Working with your partner, experiment with loops.
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 24 May 2023

function fizzBuzz() {
    let output = ""; // String to store the output
  
    for (let num = 1; num <= 200; num++) {
      let str = ""; // String to store the current number's output
  
      if (num % 3 === 0) {
        str += "Fizz";
      }
  
      if (num % 5 === 0) {
        str += "Buzz";
      }
  
      if (num % 7 === 0) {
        str += "Boom";
      }

      if (num % 9 === 0) {
        str += "Bang";
      }
  
      // If the number is not divisible by 3, 5, or 7, append the number itself
      if (str === "") {
        str = num.toString();
      } else {
        str = num.toString() + " - " + str + "!"; // Append the number, dash, and words for divisible numbers
      }
  
      output += "<p>" + str + "</p>"; // Append the current number's output to the main output string
    }
  
    $("#output").html(output); // Display the output in the "output" div
  }
  
  // Call the fizzBuzz function
  fizzBuzz();