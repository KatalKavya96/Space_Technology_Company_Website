// Sample data for events
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
    }
];

// Function to display events
function displayEvents() {
    const eventsContainer = document.getElementById("events-container");

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p>${event.description}</p>
        `;
        
        eventsContainer.appendChild(eventCard);
    });
}

// Call the function to display events on page load
displayEvents();
