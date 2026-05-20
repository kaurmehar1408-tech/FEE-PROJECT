// FILTER BUTTON FUNCTIONALITY
// Select all filter buttons
const filterBtns = document.querySelectorAll(".filter-btn");
// Select all review cards
const reviewCards = document.querySelectorAll(".review-card");
// Loop through every filter button
filterBtns.forEach(btn => {
    // Add click event to each button
    btn.addEventListener("click", () => {
        // REMOVE ACTIVE CLASS FROM CURRENT ACTIVE BUTTON
        document
            .querySelector(".filter-btn.active")
            .classList.remove("active");
        // ADD ACTIVE CLASS TO CLICKED BUTTON
        btn.classList.add("active");
        // GET FILTER CATEGORY
        const filter = btn.dataset.filter;
        // LOOP THROUGH ALL REVIEW CARDS
        reviewCards.forEach(card => {
            // SHOW CARDS IF:
            // 1. "all" button is selected
            // 2. card category matches selected filter
            if (
                filter === "all" ||
                card.dataset.category.includes(filter)
            ) {
                // Display matching cards
                card.style.display = "flex";
            } else {
                // Hide non-matching cards
                card.style.display = "none";
            }
        });
    });
});
// COUNTER ANIMATION
// Select all counter elements
const counters = document.querySelectorAll(".counter");
// Loop through every counter
counters.forEach(counter => {
    // GET TARGET NUMBER FROM HTML
    const target =
        parseFloat(counter.getAttribute("data-target"));
    // CHECK IF NUMBER CONTAINS DECIMAL VALUE
    const isDecimal = target % 1 !== 0;
    // Starting counter value
    let count = 0;
    // FUNCTION TO UPDATE COUNTER VALUE
    const updateCounter = () => {
        // Increment speed
        const increment = target / 80;
        // Increase counter value
        count += increment;
        // CONTINUE COUNTING UNTIL TARGET REACHED
        if (count < target) {
            // Display decimal or integer value
            counter.innerText = isDecimal
                ? count.toFixed(1)
                : Math.floor(count);
            // Smooth animation frame
            requestAnimationFrame(updateCounter);
        } else {
            // Final target value display
            counter.innerText = isDecimal
                ? target.toFixed(1)
                : target;
        }
    };
    // Start animation
    updateCounter();
});
// STAR RATING SYSTEM
// Select all stars
const stars = document.querySelectorAll(".star");
// Loop through stars
stars.forEach((star, index) => {
    // Add click event
    star.addEventListener("click", () => {
        // REMOVE ACTIVE CLASS FROM ALL STARS
        stars.forEach(s => s.classList.remove("active"));
        // ACTIVATE STARS UP TO CLICKED STAR
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add("active");
        }
    });
});
// IMAGE PREVIEW FEATURE
// Select file upload input
const photoUpload =
    document.getElementById("photoUpload");
// Select preview container
const previewBox =
    document.getElementById("previewBox");
// Select preview image
const previewImage =
    document.getElementById("previewImage");
// Add change event when user uploads image
photoUpload.addEventListener("change", e => {
    // Get selected file
    const file = e.target.files[0];
    // Check if file exists
    if (file) {
        // Show preview box
        previewBox.classList.remove("hidden");
        // Display uploaded image preview
        previewImage.src =
            URL.createObjectURL(file);
    }
});
// ADD REVIEW BUTTON
// Select submit button
document
    .getElementById("submitBtn")
    // Add click event
    .addEventListener("click", () => {
        // Success alert message
        alert("Review Submitted Successfully!");
    });