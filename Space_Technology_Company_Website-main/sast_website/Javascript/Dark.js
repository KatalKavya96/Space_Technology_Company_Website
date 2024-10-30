document.addEventListener("DOMContentLoaded", function() {
    // Create a theme toggle button if it doesn't already exist in the HTML
    const themeToggle = document.getElementById("theme-toggle");

    // Check saved theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme on load
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️"; // Sun icon indicates light mode toggle
    } else {
        themeToggle.textContent = "🌙"; // Moon icon indicates dark mode toggle
    }

    // Toggle theme on button click and save preference
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
});