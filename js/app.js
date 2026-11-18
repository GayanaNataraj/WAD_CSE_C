// Function to display toast notification
function showToast(message) {

    let toast = document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.backgroundColor = "#14213d";
    toast.style.color = "white";
    toast.style.padding = "15px 25px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "10000";

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}


// Function for smooth scrolling to booking section
function scrollToBooking() {

    let section = document.getElementById("booking");
    let header = document.querySelector("header");

    if (section) {

        let headerHeight = header ? header.offsetHeight : 0;

        let sectionPosition =
            section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: sectionPosition - headerHeight - 20,
            behavior: "smooth"
        });

        showToast("Your booking section is ready!");
    }
}



// Activity 7: Selector Forms and Live Interaction Using JavaScript

// Check whether the booking form controls exist
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const ticketInput = document.getElementById("tickets");

if (matchSelect && standSelect && ticketInput) {

    // Select Booking Summary elements
    const summaryMatch = document.getElementById("summaryMatch");
    const summaryStand = document.getElementById("summaryStand");
    const summaryTickets = document.getElementById("summaryTickets");
    const summaryPrice = document.getElementById("summaryPrice");
    const summaryTotal = document.getElementById("summaryTotal");

    // Ticket prices for each stand category
    const ticketPrices = {
        General: 500,
        Premium: 1000,
        VIP: 2000
    };

    // Function to update Booking Summary
    function updateBookingSummary() {

        let match = matchSelect.value;
        let stand = standSelect.value;
        let quantity = Number(ticketInput.value);

        let price = ticketPrices[stand] || 0;
        let total = price * quantity;

        summaryMatch.innerText = match || "Not selected";
        summaryStand.innerText = stand || "Not selected";
        summaryTickets.innerText = quantity || 0;
        summaryPrice.innerText = price;
        summaryTotal.innerText = total;

        showToast("Booking summary updated!");
    }

    // Add change event listeners
    matchSelect.addEventListener("change", updateBookingSummary);
    standSelect.addEventListener("change", updateBookingSummary);
    ticketInput.addEventListener("change", updateBookingSummary);
}
