// JavaScript to make the rocket follow the cursor
const rocketCursor = document.getElementById("rocket-cursor");

document.addEventListener("mousemove", (event) => {
    // Update the rocket position to follow the cursor
    rocketCursor.style.left = `${event.pageX}px`;
    rocketCursor.style.top = `${event.pageY}px`;
});
