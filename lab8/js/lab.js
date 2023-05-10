// Lab 8: Anon Functions and Callbacks
// Write functions with callbacks
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 8 May 2023

function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [71, 100, 8, 21, 22, 0, 156, 7, 800];
console.log("My array", array);

var result = array.map(isEven);
// should return [false, true, true, false, true, true, true, false, true]
console.log("Test of evenness of array", result);

var result = array.map(function(x){
    return x ** 0.5;
});
// should return [8.426149773176359, 10, 2.8284271247461903, 4.58257569495584, 4.69041575982343, 0, 12.489995996796797, 2.6457513110645907, 28.284271247461902]
console.log("Squareroot of array:", result);