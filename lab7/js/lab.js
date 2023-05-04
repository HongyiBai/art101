// Lab 7: Functions
// Write functions that take user input
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 2 May 2023

//sortUserName - a function that takes user input and sorts letters of their name


function sortUserName(name){
    
    //console.log("userName =", userName);
    // split string to array
    //var nameArray = userName.split('');
    //console.log("nameArray =", nameArray);
    // sort the array
    //var nameArraySort = nameArray.sort();
    //console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    //var nameSorted = nameArraySort.join('');
    //console.log("nameSorted =", nameSorted);
    //return nameSorted;

    return name.split("").sort().join("");
    

}
var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
var naming = sortUserName(userName);
// output
document.writeln("Oh hey, I've fixed your name:",
    naming, "</br>");