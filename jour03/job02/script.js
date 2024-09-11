$(document).ready(function() {
    // Shuffle images on button click
    $('#shuffleButton').click(function () { 
        let images = $('#imageContainer .image-wrapper').toArray();
        images = images.sort(() => Math.random() - 0.5); // Shuffle images
        $('#imageContainer').empty().append(images);
     });

     // Check if images are in correct order
     $('#checkOrderButton').click(function() {
        let isCorrect = true;
        $('#imageContainer .image-wrapper').each(function(index) {
            if ($(this).data('index') !== index) {
                isCorrect = false;
                return false; // Exit each loop
            }
        });

        if (isCorrect) {
            $('#resultMessage').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#resultMessage').text('Vous avez perdu').css('color', 'red');
        }
     });
});