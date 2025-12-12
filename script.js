// Function to close the modal, called when the 'X' or 'Close' button is clicked
function closeModal() {
    // Finds the modal backdrop element by its ID and sets its display to 'none' (hidden)
    document.getElementById('thankYouModal').style.display = 'none';
}

// Ensure the code runs only after the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById('thankYouModal');
    const modalMessage = document.getElementById('modal-message');

    // Check if the form element exists before attaching the listener
    if (contactForm) {
        // Attach the 'submit' event listener to the form element
        contactForm.addEventListener('submit', function(event) {
            
            // CRITICAL STEP: Prevent the default form submission (stops page refresh/redirect)
            event.preventDefault(); 

            // Get the values from the input fields
            const names = document.getElementById('names')?.value || '';
            const surname = document.getElementById('surname')?.value || '';

            // Construct the message to display
            const messageText = `Thank you for viewing my portfolio ${names} ${surname}!`;

            // Display the message in the modal and show the modal pop-up
            if (modal && modalMessage) {
                modalMessage.textContent = messageText;
                modal.style.display = 'block'; // Makes the modal visible
            } else {
                // Fallback for debugging if modal elements are missing
                console.error("Modal element(s) not found in the HTML.");
            }
            
            // Reset the form fields after successful submission handling
            contactForm.reset();
        });
    } else {
        console.error("Element 'contactForm' not found. Form submission handler cannot be attached.");
    }

    // Since closeModal is used inline in HTML (onclick="closeModal()"), 
    // we make it accessible globally by attaching it to the window object.
    window.closeModal = closeModal;
});

// Confirmation log to verify the script file loaded successfully
console.log("Portfolio script loaded and event listeners attached.");