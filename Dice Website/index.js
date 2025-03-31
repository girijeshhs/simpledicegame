document.addEventListener("DOMContentLoaded", function () {
    let heading = document.querySelector("h1");

    // Set default text to "Refresh Me"
    heading.textContent = "Refresh Me";

    // Generate random numbers for both dice
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Select all <img> elements inside .dice divs
    let diceImages = document.querySelectorAll(".dice img");

    if (diceImages.length === 2) {  // Ensure two dice images are found
        diceImages[0].setAttribute("src", `images/dice${randomNumber1}.png`);
        diceImages[1].setAttribute("src", `images/dice${randomNumber2}.png`);
    } else {
        console.error("Error: Not enough <img> elements found.");
    }

    // Update the <h1> text after a short delay
    setTimeout(() => {
        if (randomNumber1 > randomNumber2) {
            heading.textContent = "🚩 Player 1 Wins!";
        } else if (randomNumber1 < randomNumber2) {
            heading.textContent = "Player 2 Wins! 🚩";
        } else {
            heading.textContent = "It's a Draw! 🎲";
        }
    }, 100); // Short delay to simulate a small transition effect

    // Log results for debugging
    console.log(`Left dice: images/dice${randomNumber1}.png`);
    console.log(`Right dice: images/dice${randomNumber2}.png`);
    console.log(`Result: ${heading.textContent}`);
});
