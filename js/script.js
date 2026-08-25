GTV Website
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
├── images
│
├── index.html
├── volunteer.html
├── contact.html
├── donate.html
└── ...
/*==========================================
   GREAT TIME VICTIMS
   FORM HANDLER
==========================================*/

// =============================
// Volunteer Form
// =============================

const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {

    volunteerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const volunteer = {

            fullName: document.getElementById("fullName").value,

            email: document.getElementById("email").value,

            phone: document.getElementById("phone").value,

            occupation: document.getElementById("occupation").value,

            motivation: document.getElementById("motivation").value

        };

        fetch("http://localhost:8080/api/volunteers", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(volunteer)

        })

        .then(response => response.json())

        .then(() => {

            alert("Volunteer application submitted successfully!");

            volunteerForm.reset();

        })

        .catch(() => {

            alert("Unable to submit application.");

        });

    });

}


// =============================
// Contact Form
// =============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const message = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            subject: document.getElementById("subject").value,

            message: document.getElementById("message").value

        };

        fetch("http://localhost:8080/api/messages", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(message)

        })

        .then(response => response.json())

        .then(() => {

            alert("Message sent successfully!");

            contactForm.reset();

        })

        .catch(() => {

            alert("Unable to send message.");

        });

    });

}


// =============================
// Donation Form
// =============================

const donationForm = document.getElementById("donationForm");

if (donationForm) {

    donationForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const donation = {

            donorName: document.getElementById("donorName").value,

            email: document.getElementById("email").value,

            amount: document.getElementById("amount").value,

            paymentMethod: document.getElementById("paymentMethod").value,

            referenceNumber: document.getElementById("referenceNumber").value

        };

        fetch("http://localhost:8080/api/donations", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(donation)

        })

        .then(response => response.json())

        .then(() => {

            alert("Thank you for your donation!");

            donationForm.reset();

        })

        .catch(() => {

            alert("Unable to process donation.");

        });

    });

}
<script>

function openImage(src){

    document.getElementById("lightbox").style.display="flex";

    document.getElementById("lightbox-img").src=src;

}

function closeImage(){

    document.getElementById("lightbox").style.display="none";

}

</script>