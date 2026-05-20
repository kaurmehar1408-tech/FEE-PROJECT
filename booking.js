function validateform() {
    let flag = true;
    let username = document.getElementById("name");
    let password = document.getElementById("password");
    let dob = document.getElementById("dob").value;
    // Name validation
    if (username.value === "") {
        document.getElementById("usererror").innerText = "User name is empty";
        flag = false;
    } else if (username.value.length < 4) {
        document.getElementById("usererror").innerText = "Name must be at least 4 letters";
        flag = false;
    } else {
        document.getElementById("usererror").innerText = "";
    }
    // Password validation
    if (password.value === "") {
        document.getElementById("passerror").innerText = "Password is empty";
        flag = false;
    } else if (password.value.length < 5) {
        document.getElementById("passerror").innerText = "Password must be at least 5 characters";
        flag = false;
    } else {
        document.getElementById("passerror").innerText = "";
    }
    // DOB validation
    if (!dob) {
        document.getElementById("doberror").innerText = "Please enter your date of birth.";
        flag = false;
    } else {
        document.getElementById("doberror").innerText = "";
    }
    return flag;
}
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".booking-form form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent form submission until validation passes
        let name = form.querySelector('input[type="text"]').value.trim();
        let email = form.querySelector('input[type="email"]').value.trim();
        let date = form.querySelector('input[type="date"]').value;
        let destination = form.querySelector('#destination').value;
        let people = form.querySelector('input[type="number"]').value.trim();
        let errors = [];
        // Name check
        if (name === "") {
            errors.push("Full Name is required.");
        }
        // Email check (basic regex)
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push("Please enter a valid email address.");
        }
        // Date check (must be today or future)
        if (!date) {
            errors.push("Please select a date.");
        } else {
            let selectedDate = new Date(date);
            let today = new Date();
            today.setHours(0,0,0,0); // normalize
            if (selectedDate < today) {
                errors.push("Date must be today or a future date.");
            }
        }
        // Destination check
        if (destination === "Select Destination") {
            errors.push("Please select a destination.");
        }
        // People check
        if (people === "" || parseInt(people) <= 0) {
            errors.push("Please enter a valid number of people.");
        }
        // Show messages
        if (errors.length > 0) {
            alert("Form submission failed:\n\n" + errors.join("\n"));
        } else {
            alert("🎉 Booking successful! We’ll contact you soon.");
            form.reset(); // clear form after success
        }
    });
});

