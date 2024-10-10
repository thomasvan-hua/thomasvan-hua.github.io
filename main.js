// JavaScript source code
// Prompt user for their name and display it
function promptName() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("greeting").innerText = `Hello, ${name}! Welcome to my homepage!`;
    }
}

// Toggle dropdown menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Enlarge image when clicked
function enlargeImage() {
    const image = document.getElementById("profileImage");
    image.classList.toggle("enlarged");
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Mouseover/mouseout events for nav items
const navLinks = document.querySelectorAll('.dropdown-content a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = 'blue'; // Change color on mouseover
    });
    link.addEventListener('mouseout', function() {
        this.style.color = 'black'; // Change back on mouseout
    });
});
