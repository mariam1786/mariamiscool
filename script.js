<script>
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                this.style.backgroundColor = 'gold'; // Change color on click
                setTimeout(() => {
                    this.style.backgroundColor = 'black'; // Reset color after 0.3s
                }, 300);
            });
        });
    });
</script>

// JavaScript to move the cat
document.addEventListener("DOMContentLoaded", function () {
    // Select the cat image
    const cat = document.getElementById("cat");

    // Add an event listener for the click event
    cat.addEventListener("click", function () {
        // Get the current left position of the cat
        let currentPosition = parseInt(cat.style.left, 10) || 0;

        // Move the cat 50 pixels (5 cm) to the right
        cat.style.left = currentPosition + 50 + "px";
    });
});


