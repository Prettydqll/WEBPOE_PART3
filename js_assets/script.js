/* =====================================================
   PRESH'S HAIR STUDIO
   JAVASCRIPT FUNCTIONALITY
   ===================================================== */

/* =========================
   1. SANITIZE INPUT
   ========================= */
function sanitizeInput(input) {
    return input
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}


/* =========================
   2. ENQUIRY FORM
   ========================= */
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            sanitizeInput(
                document.getElementById("name").value.trim()
            );

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            sanitizeInput(
                document.getElementById("message").value.trim()
            );

        if (name.length < 3) {
            alert("Please enter a valid full name.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (phone !== "" && !/^\d{10}$/.test(phone)) {
            alert("Phone number must be 10 digits.");
            return;
        }

        if (message.length < 10) {
            alert("Please provide more details in your message.");
            return;
        }

        let response = "";

        switch (service) {

            case "braiding":
                response =
                    "Thank you for your enquiry. Braiding services start from R350. Availability will be confirmed shortly.";
                break;

            case "hair-styling":
                response =
                    "Thank you for your enquiry. Hair styling starts from R250 depending on the style selected.";
                break;

            case "hair-treatment":
                response =
                    "Hair treatments start from R200. We will contact you regarding available appointment dates.";
                break;

            case "nails":
                response =
                    "Nail services start from R180. Available appointment slots will be communicated shortly.";
                break;

            default:
                response =
                    "Thank you for your enquiry. We will contact you soon.";
        }

        let result =
            document.getElementById("enquiryResult");

        if (result) {
            result.innerHTML = response;
            result.style.color = "green";
            result.style.marginTop = "20px";
        } else {
            alert(response);
        }

        enquiryForm.reset();
    });
}


/* =========================
   3. CONTACT FORM
   ========================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const message =
            document.getElementById("contactMessage").value.trim();

        if (name.length < 3) {
            alert("Name must contain at least 3 characters.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.length < 10) {
            alert("Please enter a detailed message.");
            return;
        }

        let result =
            document.getElementById("contactResult");

        if (result) {
            result.innerHTML =
                "Your message has been sent successfully. We will get back to you soon.";
            result.style.color = "green";
        } else {
            alert(
                "Your message has been sent successfully."
            );
        }

        contactForm.reset();
    });

}


/* =========================
   4. FAQ ACCORDION
   ========================= */
const accordions =
    document.querySelectorAll(".accordion");

accordions.forEach(function (accordion) {

    accordion.addEventListener("click", function () {

        this.classList.toggle("active");

        const panel =
            this.nextElementSibling;

        if (panel.style.display === "block") {

            panel.style.display = "none";

        } else {

            panel.style.display = "block";

        }

    });

});


/* =========================
   5. SERVICE SEARCH
   ========================= */
const searchInput =
    document.getElementById("serviceSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const filter =
            this.value.toLowerCase();

        const cards =
            document.querySelectorAll(".service-card");

        cards.forEach(function (card) {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/* =========================
   6. SCROLL ANIMATION
   ========================= */
const animatedSections =
    document.querySelectorAll("section");

function revealSections() {

    animatedSections.forEach(function (section) {

        const position =
            section.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform =
                "translateY(0px)";
        }

    });

}

animatedSections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform =
        "translateY(30px)";
    section.style.transition =
        "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


/* =========================
   7. AJAX SUBMISSION DEMO
   ========================= */
function submitFormAjax(formData) {

    return new Promise(function (resolve) {

        setTimeout(function () {

            resolve({
                success: true,
                message:
                    "Form submitted successfully."
            });

        }, 1000);

    });

}


/* =========================
   8. WELCOME MODAL
   ========================= */
window.addEventListener("load", function () {

    const modal =
        document.getElementById("welcomeModal");

    const closeBtn =
        document.getElementById("closeModal");

    if (modal) {

        modal.style.display = "block";

        if (closeBtn) {

            closeBtn.addEventListener(
                "click",
                function () {

                    modal.style.display = "none";

                }
            );

        }

    }

});


/* =========================
   9. CURRENT YEAR FOOTER
   ========================= */
const yearElement =
    document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent =
        new Date().getFull();
}