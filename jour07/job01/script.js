// Activate the select options in form
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

// Prefilling text inputs
$(document).ready(function () {
    M.updateTextFields();
});