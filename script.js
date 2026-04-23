function showError(message) {
    alert(message);
    return false;
}

function validation() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        return showError("Please fill in all fields");
    }

    if (name.length < 2) {
        return showError("Name is too short");
    }

    if (email.includes(" ")) {
        return showError("Email cannot contain spaces");
    }

    if (!email.includes("@") || !email.includes(".")) {
        return showError("Please enter a valid email");
    }

    if (message.length < 10) {
        return showError("Message should be at least 10 characters");
    }

    return true;
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validation()) return;
        alert("Form has been submitted!");
        form.reset();
    });
}

const images = document.querySelectorAll(".card img");
const videos = document.querySelectorAll(".card video");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");

if (lightbox) {

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";

            if (lightboxImg) {
                lightboxImg.style.display = "block";
                lightboxImg.src = img.src;
            }

            if (lightboxVideo) {
                lightboxVideo.style.display = "none";
                lightboxVideo.pause();
            }
        });
    });

    videos.forEach(video => {
        video.addEventListener("click", () => {
            lightbox.style.display = "flex";

            if (lightboxImg) {
                lightboxImg.style.display = "none";
            }

            if (lightboxVideo) {
                lightboxVideo.style.display = "block";
                lightboxVideo.src = video.currentSrc;
                lightboxVideo.play();
            }
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";

        if (lightboxVideo) {
            lightboxVideo.pause();
            lightboxVideo.currentTime = 0;
        }
    });
}