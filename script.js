// document.addEventListener("DOMContentLoaded", function () {
//     const text = "Welcome to 𝔹𝕆𝕆𝕄";
//     let index = 0;
//     const speed = 100; // Typing speed in milliseconds

//     function typeText() {
//         if (index < text.length) {
//             document.getElementById("typing-text").innerHTML += text.charAt(index);
//             index++;
//             setTimeout(typeText, speed);
//         }
//     }

//     typeText();
// });




document.addEventListener("DOMContentLoaded", function () {
    const audioPlayers = document.querySelectorAll(".audio-player");
    const playButtons = document.querySelectorAll(".play-btn");

    let currentPlaying = null; // Track currently playing song

    playButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let audio = audioPlayers[index];

            // Pause the currently playing song if it's different
            if (currentPlaying && currentPlaying !== audio) {
                currentPlaying.pause();
                currentPlaying.parentElement.querySelector(".play-btn").innerText = "▶ Play";
            }

            // Toggle play/pause
            if (audio.paused) {
                audio.play();
                button.innerText = "⏸ Pause";
                currentPlaying = audio;
            } else {
                audio.pause();
                button.innerText = "▶ Play";
                currentPlaying = null;
            }
        });

        // Reset button text when song ends
        audioPlayers[index].addEventListener("ended", function () {
            button.innerText = "▶ Play";
            if (currentPlaying === audioPlayers[index]) {
                currentPlaying = null;
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add("active");
        }
    });
});


