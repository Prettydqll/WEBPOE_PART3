// Enquiry Form - Presh's Hair Studio
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enquiryForm');
    if(!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const responseDiv = document.getElementById('enquiryResponse');

        if(name === "" || date === "") {
            responseDiv.innerHTML = "<p style='color:red;'>Please fill in all fields</p>";
            return;
        }

        let price = 0;
        if(service === "braids") price = 350;
        if(service === "cornrows") price = 150;
        if(service === "weave") price = 400;
        if(service === "wig") price = 250;

        responseDiv.innerHTML = `<p style='color:green;'>Thank you ${name}! Your ${service} on ${date} will cost R${price} and is available. We will WhatsApp you to confirm.</p>`;
        form.reset();
    });
});
