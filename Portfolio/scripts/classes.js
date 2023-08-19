//Scroll Boxes
document.addEventListener("DOMContentLoaded", function() {
    const scrollableContainer = document.querySelector(".card-container");

    function scrollByFixedAmount() {
        scrollableContainer.scrollTop += 400; 
    }

    // Attach scroll event listener to a button or any other trigger
    const scrollButton = document.querySelector(".scroll-button");
    scrollButton.addEventListener("click", scrollByFixedAmount);

});

//Hint for loading radio
document.addEventListener("DOMContentLoaded", function() {
    const hoverableImage = document.querySelector(".hoverable-image");
    const targetDiv = document.getElementById("seenDiv");

    hoverableImage.addEventListener("mouseenter", function() {
        targetDiv.style.display = "block";
    });

    hoverableImage.addEventListener("mouseleave", function() {
        targetDiv.style.display = "none";

    
    });
});

//Load Radio Transmissions
document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    const hiddenDiv = document.getElementById("hiddenDiv");

    playButton.addEventListener("click", function() {
        // Toggle the visibility of the hidden div
        if (hiddenDiv.style.display === "none") {
            hiddenDiv.style.display = "block";
        } else {
            hiddenDiv.style.display = "none";
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//     const hoverableImage = document.querySelector(".hoverable-image");
//     const playButton = document.getElementById("playButton");
//     const seenDiv = document.getElementById("seenDiv");

//     hoverableImage.addEventListener("mouseenter", function() {
//         seenDiv.style.display = "block";
//     });

//     hoverableImage.addEventListener("mouseleave", function() {
//         if (!playButton.classList.contains("playing")) {
//             seenDiv.style.display = "none";
//         }
//     });

//     playButton.addEventListener("click", function() {
//         if (seenDiv.style.display === "none") {
//             seenDiv.style.display = "block";
//             playButton.classList.add("playing");
//             // Load and play radio transmissions
//         } else {
//             seenDiv.style.display = "none";
//             playButton.classList.remove("playing");
//             // Stop radio transmissions
//         }
//     });
// });



document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function() {
        console.log("Image Clicked"); // Log a message when the image is clicked.
    });
});