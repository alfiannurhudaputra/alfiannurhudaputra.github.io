// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// accordion
document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

// filter buttons1
function filter1(category1) {
    const items = document.querySelectorAll('.project-item');
    const buttons = document.querySelectorAll('#filter-buttons1 button');
    const blackButton = document.querySelector('.black-button1');

    items.forEach(item => {
        item.style.display = 'none';

        if (category1 === 'all' || item.classList.contains(category1)) {
            item.style.display = 'block';
        }
    });

    // check if the category is not 'all' and change the background color of the black-button accordingly
    if (category1 !== 'all') {
        blackButton.style.backgroundColor = '#0A5AAC';
    } else {
        blackButton.style.backgroundColor = '#303841';
    }

    // remove the "active-button" class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active-button1');
    });

    // add the "active-button" class to the clicked button
    const activeButton = document.querySelector(`#filter-buttons1 button[data-category1="${category1}"]`);
    activeButton.classList.add('active-button1');
}

// filter buttons2
function filter2(category2) {
    const items = document.querySelectorAll('.project-item2');
    const buttons = document.querySelectorAll('#filter-buttons2 button');
    const blackButton = document.querySelector('.black-button2');

    items.forEach(item => {
        item.style.display = 'none';

        if (category2 === 'all2' || item.classList.contains(category2)) {
            item.style.display = 'block';
        }
    });

    // check if the category is not 'all' and change the background color of the black-button accordingly
    if (category2 !== 'all2') {
        blackButton.style.backgroundColor = '#0A5AAC';
    } else {
        blackButton.style.backgroundColor = '#303841';
    }

    // remove the "active-button" class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active-button2');
    });

    // add the "active-button" class to the clicked button
    const activeButton = document.querySelector(`#filter-buttons2 button[data-category2="${category2}"]`);
    activeButton.classList.add('active-button2');
}

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
window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}

