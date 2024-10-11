"use strict";

const body = document.getElementById("body");
const showSidebar = document.getElementById("showSidebar");
const hideSidebar = document.getElementById("hideSidebar");
const sidebar = document.querySelector(".sidebar");

/* opsætning ift. visning af sidebar */

showSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
  body.style.overflow = "hidden";
});

/* opsætning ift. at forlade visningstilstand for sidebar */

hideSidebar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
  body.style.overflow = "auto";
});

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  /* visning af header klistret fast til top af siden */
  if (scrollTop <= 0) {
    header.style.top = "0";
    header.style.position = "sticky";
 
  } else {
    header.style.top = "0";
    header.style.position = "fixed";
  }
  lastScrollTop = scrollTop;
});


// Select elements
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

let currentIndex = 0;
const totalImages = images.length; // Total number of images (8)
const imageWidth = 400; // Set the width of each image

// Function to show an image at the given index
function showImage(index) {
    // Update the transform property to show the current image
    carousel.style.transform = `translateX(-${index * imageWidth}px)`; 
}

// Function to go to the next image (circular)
function nextImage() {
    currentIndex++;
    
    // If we reach the last image, reset the index to the first image after a short delay
    if (currentIndex >= totalImages) {
        currentIndex = 0;
        setTimeout(() => {
            showImage(currentIndex); // Immediately show the first image
        }, 500); // Delay to allow the last image to be seen
    } else {
        showImage(currentIndex);
    }
}

// Auto-slide functionality (moving like a video)
function startAutoSlide() {
    setInterval(nextImage, 2000); // Change image every 2 seconds
}

// Start the auto-slide when the page loads
window.addEventListener('load', startAutoSlide);
