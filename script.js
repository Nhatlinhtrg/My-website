document.addEventListener('DOMContentLoaded', function () {
    // Example: Adding form submission confirmation
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        alert("Thank you for your message! I'll get back to you soon.");

        // Reset form fields after submission
        form.reset();
    });
});

