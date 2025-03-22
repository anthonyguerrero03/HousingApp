document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form'); 
    const modal = document.getElementById('loginModal');
    const closeButton = document.querySelector('.close');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Display the modal
        modal.style.display = 'block';
    });

    //  button function
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

   
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
