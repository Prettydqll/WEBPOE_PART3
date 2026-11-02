// Contact Form - Presh's Hair Studio
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if(!form) return;

    form.addEventListener('submit', function(e) {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const errorDiv = document.getElementById('formError');

        if(!email.includes('@') || !email.includes('.')) {
            e.preventDefault();
            errorDiv.innerText = "Please enter a valid email address with @";
            return;
        }

        if(message.length < 20) {
            e.preventDefault();
            errorDiv.innerText = "Message must be at least 20 characters";
            return;
        }

        errorDiv.innerText = "";
        // Let mailto happen if valid
    });
});