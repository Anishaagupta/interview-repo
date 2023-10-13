
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // To prevent the default form submission behavior

    // Redirect to the Thank You page
    window.location.href = 'thankyou.html';
});
