// Lab 16: JSON and APIs
// Working with your partner, experiment with processing JSON from an API.
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 5 June 2023

// Task 4: Create a JavaScript file
$(document).ready(function() {
    // Task 4: Use $.ajax() to retrieve data and store this object in a variable comicObj
    $.ajax({
        url: "https://xkcd.com/614/info.0.json",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var comicObj = data;

            // Task 4: Within the success callback function, process the parts and add them to your webpage
            var outputDiv = $("#output");

            // Task 4: Give the section a title using the comicObj.title key from the object
            var title = $("<h2>").text(comicObj.title);
            outputDiv.append(title);

            // Task 4: Create an image tag using the comicObj.img key from the object
            var img = $("<img>").attr("src", comicObj.img);

            // Task 4: Give the image an alt and title attributes using the comicObj.alt key from the object
            img.attr("alt", comicObj.alt);
            img.attr("title", comicObj.alt);

            outputDiv.append(img);
        }
    });
});