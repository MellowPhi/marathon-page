// Function to scroll smoothly to the end of the page when the button is clicked
function scrollToPageEnd() {
    //const distanceContainer = document.querySelector('.distance-container');
    const distanceContainer = document.getElementById('map-container');
    if (distanceContainer) {
      distanceContainer.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Function to initialize the scroll-to-end button
  function initScrollToEndButton() {
    // Add an event listener to the scroll-to-end button
    const scrollToButton = document.getElementById('join-button');
    if (scrollToButton) {
      scrollToButton.addEventListener('click', scrollToPageEnd);
    }
  }
  
  // Add an event listener to handle the scroll-to-end button
document.addEventListener('DOMContentLoaded', initScrollToEndButton);
  