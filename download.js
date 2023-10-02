document.addEventListener("DOMContentLoaded", function () {
    const videoSource = document.getElementById("videoSource");
    const downloadLink = document.getElementById("downloadLink");

    // Get the video Blob URL from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const videoBlobURL = urlParams.get("videoBlobURL");
console.log(videoBlobURL)
    if (videoBlobURL) {
        videoSource.src = videoBlobURL;
        downloadLink.href = videoBlobURL;
        downloadLink.style.display = "block";
    }
});

// Function to load and include content
function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById(elementId).innerHTML = content;
        });
}

// Load content for different sections
loadContent(' Nav.html', 'nav');
loadContent('Features.html', 'features');
loadContent('Works.html', 'work');
loadContent('Footer.html', 'footer');


// Get the modal element
var modal = document.getElementById("myModal");

// Get the close button element
var closeBtn = document.querySelector(".modal-close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener to close the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);

// Event listener to close the modal when the user clicks outside of it
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
// Get the email input field and send button
var emailInput = document.getElementById("emailInput");
var sendEmailButton = document.getElementById("sendEmail");

// Add a click event listener to the send button
sendEmailButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the email address entered by the user
    var emailAddress = emailInput.value;

    // Check if the email address is not empty
    if (emailAddress.trim() !== "") {
        // Create a "mailto:" link with the email address and subject
        var mailtoLink = "mailto:" + emailAddress + "?subject=Check%20Out%20This%20Video&body=Here%20is%20the%20video%20URL:%20YOUR_URL_HERE";

        // Open the user's default email client with the pre-filled email
        window.location.href = mailtoLink;
    }
});
// Get the modal element and close button
var modal = document.getElementById("myModal");
var closeModalButton = document.querySelector(".modal-close");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener to close the modal when the close button is clicked
closeModalButton.addEventListener("click", closeModal);
