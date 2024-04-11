document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('customers');

    table.addEventListener('click', function(e) {
        // Check if the clicked element has the 'editButton' class
        if (e.target && e.target.classList.contains('editButton')) {
            // Navigate to /update route
            window.location.href = '/update';
        }
    });
});
function submitForm() {
    document.getElementById("myForm").submit();
}