const events = [
    {
        title: "Comet Gazing Event",
        date: "October 11, 2024",
        description: "An observation session where students explored comet sightings on the A Block Terrace."
    },
    {
        title: "Interstellar Movie Night",
        date: "October 18, 2024",
        description: "A screening of the movie 'Interstellar' followed by a discussion on its scientific concepts."
    },
    {
        title: "Guest Lecture: Celestial Calendar of Ancient India",
        date: "October 21, 2024",
        description: "Dr. Rajkumar Vedam discussed ancient astronomical observations and precision in calculations."
    },
    {
        title: "Space Technology Workshop",
        date: "November 5, 2024",
        description: "Hands-on workshop where participants learned about cutting-edge space technology and innovations."
    },
    {
        title: "Night Sky Photography",
        date: "November 12, 2024",
        description: "A guided session on photographing the night sky, focusing on star trails and constellations."
    }
];

const eventsContainer = document.getElementById("events-container");
let currentIndex = 0;

// Create event cards and add them to the container
events.forEach((event, index) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    eventCard.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p>${event.description}</p>
    `;
    eventCard.style.display = index === 0 ? "block" : "none";
    eventsContainer.appendChild(eventCard);
});

// Function to update the visible event with animation
function updateCarousel() {
    const eventCards = document.querySelectorAll(".event-card");
    eventCards.forEach((card, index) => {
        card.style.opacity = index === currentIndex ? "1" : "0"; // Fade-in effect
        card.style.display = index === currentIndex ? "block" : "none";
    });
}

// Automatic transition to next event every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex < events.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 1500); // Change every 3 seconds
