
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
    heart.textContent = ["💙", "♡", "💗", "💕", "💖"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        (Math.random() * 4 + 5) + "s";

    const size = Math.random() * 18 + 34;
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.fontSize = size * 0.48 + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 500);

// Personal love note
const loveNoteBtn = document.getElementById("loveNoteBtn");
const loveNoteMessage = document.getElementById("loveNoteMessage");

loveNoteBtn.addEventListener("click", function () {
    const isHidden = loveNoteMessage.classList.toggle("hidden");
    loveNoteBtn.setAttribute("aria-expanded", String(!isHidden));
    loveNoteBtn.innerText = isHidden ? "Click Me 💙" : "Close My Message 💌";

    if (!isHidden) {
        celebrate();
    }
});

// Celebration
function celebrate() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 80);
    }
}

// Memories photo viewer
const memoryDialog = document.getElementById("memoryDialog");
const memoryDialogImage = document.getElementById("memoryDialogImage");
const memoryClose = document.getElementById("memoryClose");

document.querySelectorAll(".memory-photo").forEach(function (photoButton) {
    photoButton.addEventListener("click", function () {
        memoryDialogImage.src = photoButton.dataset.image;
        memoryDialogImage.alt = photoButton.dataset.alt;
        memoryDialog.showModal();
    });
});

memoryClose.addEventListener("click", function () {
    memoryDialog.close();
});

memoryDialog.addEventListener("close", function () {
    memoryDialogImage.src = "";
});
