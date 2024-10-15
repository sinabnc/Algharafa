// Get modal elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var closeBtn = document.getElementsByClassName("close")[0];

// Attach click event to all images with class 'open-modal'
var images = document.querySelectorAll('.open-modal');
images.forEach(function(image) {
    image.onclick = function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        modal.style.display = "block";
        modalImg.src = this.href; // Set image source for the modal
    };
});

// Close the modal when the user clicks the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the image
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
