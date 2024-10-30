// JavaScript source code
window.onload = function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Store input values in local storage
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(el => el.value);
        const message = document.getElementById('message').value;

        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('gender', gender);
        localStorage.setItem('interests', JSON.stringify(interests)); // Store as JSON string
        localStorage.setItem('message', message);

        alert('Data stored in local storage!');

        // Optionally, you can reset the form
        form.reset();
    });

    // Clear button functionality
    form.querySelector('input[type="reset"]').addEventListener('click', function() {
        localStorage.clear(); // Clear local storage on reset
    });
};
