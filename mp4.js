const clickableVideo = document.getElementById('clickableVideo');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const popupClose = document.getElementById('popupClose');
const popupVideo = document.getElementById('popupVideo');

// Show popup and play video on click
clickableVideo.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    popupVideo.play(); // Automatically play video in popup
});

// Close popup and stop video on 'X' button click
popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    popupVideo.pause(); // Pause video when closing popup
    popupVideo.currentTime = 0; // Reset video to the beginning
});

// Close popup and stop video on overlay click
overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    popupVideo.pause(); // Pause video when closing popup
    popupVideo.currentTime = 0; // Reset video to the beginning
});
