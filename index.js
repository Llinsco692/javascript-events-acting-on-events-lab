// Get reference to the dodger element
const dodger = document.getElementById("dodger");

// Set the initial position of the dodger if it's not set
if (dodger.style.left === "") {
  dodger.style.left = "180px";  // 180px is the initial center position of the dodger
}

// Function to move the dodger left
function moveDodgerLeft() {
  // Get the current left position of the dodger (as a string)
  let leftNumbers = dodger.style.left;

  // Remove the "px" from the string and parse the numeric value
  const left = parseInt(leftNumbers.replace("px", ""), 10);

  // Only move the dodger if it's not at the left edge of the game field
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  // Get the current left position of the dodger (as a string)
  let leftNumbers = dodger.style.left;

  // Remove the "px" from the string and parse the numeric value
  const left = parseInt(leftNumbers.replace("px", ""), 10);

  // Prevent the dodger from moving out of the right edge of the game field
  if (left < 360) {  // 400px (game field width) - 40px (dodger width)
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener for keydown events
document.addEventListener("keydown", function (e) {
  // If the left arrow key is pressed, move the dodger left
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  
  // If the right arrow key is pressed, move the dodger right
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
