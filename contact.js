    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop default submission
        let name = form.querySelector('input[type="text"]').value.trim();
        let email = form.querySelector('input[type="email"]').value.trim();
        let message = form.querySelector('textarea').value.trim();
        let errors = [];
        // Name validation
        if (name === "") {
            errors.push("Name is required.");
        }
        // Email validation
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }
        // Message validation
        if (message === "") {
            errors.push("Oops! You forgot to write your message. Tell us what’s on your mind.");
        }
        // Show result
        if (errors.length > 0) {
            alert("Form submission failed:\n\n" + errors.join("\n"));
        } else {
            alert("✅ Thank you, " + name + "! Your message has been sent successfully.");
            form.reset(); // clear form after success
        }
    });
});