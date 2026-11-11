
// Surprise message button
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", function () {
    surprise.classList.toggle("hidden");

    if (surprise.classList.contains("hidden")) {
        surpriseBtn.innerText = "Open My Little Surprise 🎁";
    } else {
        surpriseBtn.innerText = "Close My Surprise 💗";
    }
});

// First answer button
const yesBtn = document.getElementById("yesBtn");
const ofCourseBtn = document.getElementById("ofCourseBtn");
const answer = document.getElementById("answer");

yesBtn.addEventListener("click", function () {
    answer.innerHTML =
        "Awwww! 🥹❤️ I miss you more than words can explain! " +
        "Sending you the biggest virtual hug and a million kisses! 💋💗";

    celebrate();
});

ofCourseBtn.addEventListener("click", function () {
    answer.innerHTML =
        "Hehe! I knew it! 🙈❤️ Now close your eyes " +
        "and imagine me giving you the tightest hug ever! 🫂💋";

    celebrate();
});

// Floating hearts
const heartsContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["❤️", "💗", "💕", "💖", "💘"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        (Math.random() * 4 + 5) + "s";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);

// Celebration
function celebrate() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 80);
    }
}
