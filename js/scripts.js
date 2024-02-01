// scroll to
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = 20;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// toggle the mobile menu
document.querySelector('.menu-icon').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

// modal image
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";

    // add event listener to close the modal when clicking on the modal content image
    let modalImg = modal.querySelector(".modal-content img");
    modalImg.addEventListener("click", function () {
        closeModal(modalId);
    });
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// close modal when clicking
window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}

// scroll to top
// get a reference to the button element
const scrollToTop = document.getElementById("scroll-to-top");

// show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
};

// scroll to the top of the document when the button is clicked
scrollToTop.addEventListener("click", function () {
    // smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
    // scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    // reset scrolling behavior to default
    setTimeout(function () {
        document.documentElement.style.scrollBehavior = "auto";
    }, 1000); // adjust the delay
});
