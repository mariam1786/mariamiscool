console.log("JavaScript is working!");




// JavaScript to make the cat move when clicked
document.addEventListener('DOMContentLoaded', () => {
    const cat = document.getElementById('cat');
    const catText = document.getElementById('cat-text');

    cat.addEventListener('click', () => {
        // Move the cat to a random position on the screen
        const randomX = Math.floor(Math.random() * (window.innerWidth - cat.width));
        const randomY = Math.floor(Math.random() * (window.innerHeight - cat.height));

        cat.style.position = 'absolute';
        cat.style.left = `${randomX}px`;
        cat.style.top = `${randomY}px`;

        // Update the text below the cat
        catText.textContent = "You found me! Press me to move again!";
    });
});


