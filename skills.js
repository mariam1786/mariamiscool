// Select the cat image
const cat = document.getElementById('cat');

// Variable to track the spin state
let isSpinning = false;

// Add click event listener
cat.addEventListener('click', function() {
    if (!isSpinning) {
        isSpinning = true; // Set spinning state to true

        // Apply 360 degree rotation to spin the cat
        cat.style.transform = 'rotate(360deg)';

        // Wait for the transition to complete (duration of 0.5s)
        setTimeout(() => {
            // Reset the rotation back to 0 degrees after 0.5s (500ms)
            cat.style.transform = 'rotate(0deg)';
            isSpinning = false; // Allow next spin
        }, 500); // Timeout duration matches the transition duration (0.5s)
    }
});



