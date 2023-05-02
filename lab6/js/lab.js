// Lab 6: Arrays and Objects
// Define Arrays  and create Object in JavaScript
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 29 April 2023


// Define Variables
var myTransport = ["Car", "Bus", "Airplane"];

// create an object for my main ride
var myMainRide = {
    make: "Mercedes-Benz",
    model: "C300",
    color: "silver",
    year: "2017",
    age: function() {
        return 2023 - this.year;
    }
};

// output
document.writeln("Kinds of transportion I use: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
