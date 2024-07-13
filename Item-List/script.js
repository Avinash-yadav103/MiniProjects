// Create a new Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is in view
            console.log('Element is in view');
            // Do something with the element
        } else {
            // Element is out of view
            console.log('Element is out of view');
            // Do something else
        }
    });
});

// Select the element you want to observe
const targetElement = document.querySelector('.target-element');

// Start observing the target element
observer.observe(targetElement);