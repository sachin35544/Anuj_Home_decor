// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // You can add JavaScript functionality here
    // For example, a mobile menu toggle:
    
    // const mobileMenuButton = document.querySelector('.mobile-menu-button');
    // const mainNav = document.querySelector('.main-nav');
    
    // if (mobileMenuButton) {
    //     mobileMenuButton.addEventListener('click', function() {
    //         mainNav.classList.toggle('show');
    //     });
    // }
    
    // Image slider functionality could be added here
    
    // Form validation for contact forms
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add active class to clicked link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // If the link has a hash, implement smooth scrolling
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});