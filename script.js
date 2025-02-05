// Get elements
const cartButton = document.getElementById("cart-button");
const modal = document.getElementById("cart-modal");
const closeModal = document.getElementById("close-modal");
const backToMenu = document.getElementById("back-to-menu");

// Function to disable scrolling
function disableScroll() {
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Open modal when clicking cart button
cartButton.addEventListener("click", () => {
    console.log("Cart button clicked!"); // Debugging
    modal.style.display = "flex";
    disableScroll(); // Disable scrolling
});

// Close modal when clicking "Back to Menu" button or close icon
backToMenu.addEventListener("click", () => {
    modal.style.display = "none";
    enableScroll(); // Enable scrolling
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    enableScroll(); // Enable scrolling
});


const track = document.querySelector(".carousel-track");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;

nextBtn.addEventListener("click", () => {
    index = (index + 1) % 3; // Loops back to first card after last
    track.style.transform = `translateX(-${index * 17.3}rem)`;
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + 3) % 3; // Loops back to last card if at first
    track.style.transform = `translateX(-${index * 17.3}rem)`;
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("custom-modal");
    const openModalBtn = document.getElementById("custom-openModal");
    const closeModalBtn = document.getElementById("custom-closeModal");

    console.log("Modal:", modal);
    console.log("Open Button:", openModalBtn);
    console.log("Close Button:", closeModalBtn);

    if (!modal || !openModalBtn || !closeModalBtn) {
        console.error("❌ One or more elements are missing. Check your HTML IDs.");
        return; // Stop execution if elements are not found
    }

    // Open Modal
    openModalBtn.addEventListener("click", () => {
        console.log("✅ Open button clicked!");
        modal.classList.remove("custom-hidden");
    });

    // Close Modal
    closeModalBtn.addEventListener("click", () => {
        console.log("✅ Close button clicked!");
        modal.classList.add("custom-hidden");
    });

    // Close when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("custom-hidden");
        }
    });
});
