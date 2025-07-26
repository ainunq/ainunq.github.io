document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (validateForm(name, email, message)) {
                alert('Thank you for your message!');
                contactForm.reset();
            }
        });
    }

    function validateForm(name, email, message) {
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});