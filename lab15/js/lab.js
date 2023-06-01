// Lab 15: AJAX
// Working with your partner, experiment with jQuery and AJAX.
// Hongyi Bai <hobai@ucsc.edu> Mingze Li <mli168@ucsc.edu>
// 31 May 2023


$(document).ready(function() {
    // Add a click event to the button
    $('#activate').click(function() {
        // Make an AJAX call to fetch output from your API
        $.ajax({
            // The URL for the request 
            url: "https://api.chucknorris.io/jokes/random",
            // The data to send (if required by the API)
            data: { 
                id: 123,
                api_key: "blahblahblah"
            },
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType: "json",
            // What to do when the API call is successful
            success: function(data) {
                // Put the output of the AJAX call in the output div
                $('#output').text(data.value);
            },
            // What to do if the API call fails
            error: function(jqXHR, textStatus, errorThrown) { 
                // Display an error message
                $('#output').text("Error: " + textStatus + " - " + errorThrown);
            }
        });
    });
});