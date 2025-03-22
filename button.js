document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Display the modal
        modal.style.display = 'block';
    });

    // Close the modal when the user clicks on the close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
