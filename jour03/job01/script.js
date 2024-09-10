$(document).ready(function () {
    // Show the quote when the "Afficher Citation" button is clicked
    $('#showButton').click(function () {
        $('#quoteContainer').show();
    });

    // Hide the quote when the "Cacher citation" button is clicked
    $('#hideButton').click(function () {
        $('#quoteContainer').hide();
    });
});