// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = mobileMenu.querySelectorAll('a');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Set current year in footer
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Smooth scroll for anchor links & Navbar shrink
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) { // Add class when scrolled more than 50px
        navbar.classList.add('navbar-sticky');
        navbar.classList.remove('py-6');
        navbar.classList.add('py-4');
    } else {
        navbar.classList.remove('navbar-sticky');
        navbar.classList.add('py-6');
        navbar.classList.remove('py-4');
    }

    // Optional: Hide navbar on scroll down, show on scroll up
    // if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight){
    //     navbar.style.top = `-${navbar.offsetHeight}px`;
    // } else {
    //     navbar.style.top = "0";
    // }
    // lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - (navbar.classList.contains('navbar-sticky') ? navbar.offsetHeight : navbar.offsetHeight + 24) ; // Adjust for sticky nav height (24 is for initial padding diff)
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});