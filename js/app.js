
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
