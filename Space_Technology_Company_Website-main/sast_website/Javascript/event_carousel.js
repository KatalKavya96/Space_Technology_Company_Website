let lastScrollY = window.scrollY;

// Function to check if an element is fully visible in the viewport
function isPartiallyInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to check if an element has left the viewport at the bottom
function hasLeftViewportFromBottom(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= (window.innerHeight || document.documentElement.clientHeight);
}

// Function to toggle 'in-view' class based on viewport visibility and scroll direction
function checkSlideIn() {
    const currentScrollY = window.scrollY;
    const scrollDown = currentScrollY > lastScrollY;
    const slides = document.querySelectorAll('.carousel-slide');

    slides.forEach(slide => {
        if (scrollDown) {
            // Add 'in-view' class when scrolling down and slide is partially in viewport
            if (isPartiallyInViewport(slide)) {
                slide.classList.add('in-view');
            }
        } else {
            // Remove 'in-view' class only if the slide has left the viewport from the bottom
            if (hasLeftViewportFromBottom(slide)) {
                slide.classList.remove('in-view');
            }
        }
    });

    lastScrollY = currentScrollY;
}

// Event listener for scroll to trigger the checkSlideIn function
window.addEventListener('scroll', checkSlideIn);

// Initial call to ensure slides in view on page load
checkSlideIn();
