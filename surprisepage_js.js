document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.scroll-container');
    const items = document.querySelectorAll('.scroll-item');
    let currentIndex = Math.floor(items.length / 2); // Start in the middle

    let elements = document.getElementsByClassName('scroll-item');
    let bigPopUp = '';

    function bigImageIdExtractor() {
        let elementId = elements[currentIndex].id;
        console.log(elementId);
        let mockup = 'big-' + elementId;
        bigPopUp = document.getElementById(mockup);
        console.log("bigpopup", bigPopUp);
        console.log("mockup", mockup);
    }

    function updateBorder() {
        items.forEach((item, index) => {
            item.classList.toggle('bordered', index === currentIndex);
        });
        bigImageIdExtractor();
        container.scrollLeft = items[currentIndex].offsetLeft - (container.clientWidth / 2) + (items[currentIndex].clientWidth / 2);

        setTimeout(() => {
            bigPopUp.classList.toggle('active-big-border');
            console.log("Add");
        }, 1000);
    }

    // New wrapIndex function to handle circular behavior
    function wrapIndex(index) {
        if (index < 0) {
            return items.length - 1; // Wrap to last index
        } else if (index >= items.length) {
            return 0; // Wrap to first index
        }
        return index;
    }

    document.getElementById('nextButton').addEventListener('click', function () {
        currentIndex = wrapIndex(currentIndex + 1); // Increment and wrap
        updateBorder();
    });

    document.getElementById('prevButton').addEventListener('click', function () {
        currentIndex = wrapIndex(currentIndex - 1); // Decrement and wrap
        updateBorder();
    });

    container.addEventListener('wheel', (event) => {
        var currentScrollLeft = container.scrollLeft;

        // Check the direction of the scroll
        if (event.deltaY < 0) {
            // Scroll up
            container.scrollBy({
                left: -10,
            });
            currentIndex = wrapIndex(currentIndex - 1); // Scroll left and wrap
            bigPopUp.classList.remove('active-big-border');
            updateBorder();
        } else {
            // Scroll down
            container.scrollBy({
                left: 10,
            });
            currentIndex = wrapIndex(currentIndex + 1); // Scroll right and wrap
            bigPopUp.classList.remove('active-big-border');
            updateBorder();
        }

        event.preventDefault(); // Prevent default scroll behavior
    });

    updateBorder();  // Initial call to set the border on the first item

    const video = document.getElementById('section1_video_footage');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Play the video if the div is in view
                video.play().catch(error => {
                    console.log("Error playing video:", error);
                });
                // video.setAttribute('autoplay', ''); // Add autoplay
                // console.log('Autoplay added');

            } else {
                // Pause the video if the div is out of view
                video.pause();
                // video.removeAttribute('autoplay'); // Remove autoplay
                // console.log('Autoplay removed');
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    // Observe the video container
    const videoContainer = document.querySelector('.section1_video');
    observer.observe(videoContainer);


    const clickableDiv = document.getElementById('letter');
    const targetElement = document.getElementById('loveletter');

    let clickCount = 0;

    clickableDiv.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 1) {
            // First click: toggle 'active' class
            targetElement.classList.toggle('active-love-leter');
        } else if (clickCount === 2) {
            // Second click: remove 'active' and add 'second-click'
            targetElement.classList.add('active-love-leter-reverse');
            targetElement.classList.remove('active-love-leter');
            // targetElement.classList.add('active-love-leter-reverse');

            // Wait for a while, then remove 'second-click'
            setTimeout(() => {
                targetElement.classList.remove('active-love-leter-reverse');
                clickCount = 0; // Reset click count for next cycle
            }, 5000); // Adjust time as needed
        }
    });
});