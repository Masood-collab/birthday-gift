/* =========================================
   PREMIUM BIRTHDAY EXPERIENCE
   ========================================= */


/* =========================================
   MEMORY DATA
   ========================================= */

let currentMemory = 1;

const memories = [

    {
        image:
            "Screenshot_2026-08-02-21-13-33-332_com.miui.mediaviewer.jpg",

        caption:
            "A beautiful memory ✦"
    },

    {
        image:
            "B612_20220531_173320_089.jpg",

        caption:
            "A moment worth remembering ♡"
    },

    {
        image:
            "Snapchat-1575289812.jpg",

        caption:
            "One more beautiful moment ✨"
    }

];


/* =========================================
   SCREEN NAVIGATION
   ========================================= */

function goTo(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    const nextScreen =
        document.getElementById(screenId);


    if (!nextScreen) {
        return;
    }


    nextScreen.classList.add("active");


    createParticles(12);


    if (screenId === "letterScreen") {

        setTimeout(function() {

            openEnvelope();

        }, 650);

    }

}


/* =========================================
   START EXPERIENCE
   ========================================= */

function startExperience() {

    startMusic();

    createParticles(25);

    goTo("nameScreen");

}


/* =========================================
   GIFT
   ========================================= */

let giftOpened = false;

function openGift() {

    if (giftOpened) {
        return;
    }

    giftOpened = true;


    const gift =
        document.getElementById("gift");


    const hint =
        document.getElementById("giftHint");


    if (gift) {

        gift.classList.add("opened");

    }


    if (hint) {

        hint.style.opacity = "0";

    }


    createParticles(65);


    setTimeout(function() {

        goTo("memories");

    }, 1550);

}


/* =========================================
   MEMORIES
   ========================================= */

function nextMemory() {

    const image =
        document.getElementById("memoryImage");

    const caption =
        document.getElementById("memoryCaption");

    const number =
        document.getElementById("memoryNumber");

    const button =
        document.getElementById("memoryButton");


    if (!image || !caption || !number) {
        return;
    }


    if (currentMemory >= 3) {

        goTo("letterScreen");

        return;

    }


    image.classList.add("changing");


    setTimeout(function() {

        currentMemory++;


        image.src =
            memories[currentMemory - 1].image;


        caption.textContent =
            memories[currentMemory - 1].caption;


        number.textContent =
            "0" + currentMemory + " / 03";


        image.classList.remove("changing");


        createParticles(15);


    }, 450);


    if (currentMemory === 3 && button) {

        button.innerHTML =
            'Continue <span>→</span>';

    }

}


/* =========================================
   ENVELOPE
   ========================================= */

let envelopeOpened = false;

function openEnvelope() {

    if (envelopeOpened) {
        return;
    }


    const envelope =
        document.getElementById("envelope");


    if (!envelope) {
        return;
    }


    envelopeOpened = true;


    setTimeout(function() {

        envelope.classList.add("open");

        createParticles(25);

    }, 300);

}


/* =========================================
   FINAL SCREEN
   ========================================= */

function showFinal() {

    createParticles(70);

    goTo("finalScreen");


    setTimeout(function() {

        createConfetti(100);

    }, 450);

}


/* =========================================
   CONFETTI
   ========================================= */

function createConfetti(amount) {

    const container =
        document.getElementById("confetti");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.width =
            (4 + Math.random() * 6) + "px";


        piece.style.height =
            (7 + Math.random() * 9) + "px";


        piece.style.background =
            getConfettiColor();


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";


        container.appendChild(piece);


    }


    setTimeout(function() {

        container.innerHTML = "";

    }, 8000);

}


function getConfettiColor() {

    const colors = [

        "#d8b56a",
        "#f0d48b",
        "#ffffff",
        "#a77b40",
        "#7b426d"

    ];


    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];

}


/* =========================================
   PARTICLES
   ========================================= */

function createParticles(amount) {

    const symbols = [

        "✦",
        "✧",
        "⋆",
        "✨",
        "♡"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.fontSize =
            (9 + Math.random() * 18) + "px";


        particle.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        particle.style.animationDelay =
            Math.random() * 1.3 + "s";


        document.body.appendChild(
            particle
        );


        setTimeout(function() {

            particle.remove();

        }, 8000);

    }

}


/* =========================================
   AMBIENT MUSIC
   ========================================= */

let audioContext = null;

let masterGain = null;

let musicPlaying = false;

let musicTimer = null;


function startMusic() {

    if (musicPlaying) {
        return;
    }


    try {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();


        masterGain =
            audioContext.createGain();


        masterGain.gain.value =
            0.025;


        masterGain.connect(
            audioContext.destination
        );


        musicPlaying = true;


        const button =
            document.getElementById(
                "musicButton"
            );


        if (button) {

            button.classList.add(
                "playing"
            );

            button.textContent = "♫";

        }


        playAmbientLoop();

    } catch (error) {

        console.log(
            "Audio unavailable:",
            error
        );

    }

}


function playAmbientLoop() {

    if (!musicPlaying) {
        return;
    }


    const notes = [

        261.63,
        329.63,
        392.00,
        329.63,
        293.66,
        349.23,
        440.00,
        349.23

    ];


    let index = 0;


    function playNote() {

        if (!musicPlaying) {
            return;
        }


        const oscillator =
            audioContext.createOscillator();


        const gain =
            audioContext.createGain();


        oscillator.type =
            "sine";


        oscillator.frequency.value =
            notes[index];


        gain.gain.setValueAtTime(
            0,
            audioContext.currentTime
        );


        gain.gain.linearRampToValueAtTime(
            0.45,
            audioContext.currentTime + 0.08
        );


        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 1.6
        );


        oscillator.connect(gain);

        gain.connect(masterGain);


        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 1.7
        );


        index =
            (index + 1) % notes.length;


        musicTimer =
            setTimeout(
                playNote,
                850
            );

    }


    playNote();

}


function stopMusic() {

    musicPlaying = false;


    if (musicTimer) {

        clearTimeout(
            musicTimer
        );

    }


    if (masterGain) {

        masterGain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.5
        );

    }


    const button =
        document.getElementById(
            "musicButton"
        );


    if (button) {

        button.classList.remove(
            "playing"
        );

        button.textContent = "♫";

    }

}


function toggleMusic() {

    if (musicPlaying) {

        stopMusic();

    } else {

        startMusic();

    }

}


/* =========================================
   REPLAY
   ========================================= */

function replayExperience() {

    currentMemory = 1;

    giftOpened = false;

    envelopeOpened = false;


    const image =
        document.getElementById(
            "memoryImage"
        );


    const caption =
        document.getElementById(
            "memoryCaption"
        );


    const number =
        document.getElementById(
            "memoryNumber"
        );


    const button =
        document.getElementById(
            "memoryButton"
        );


    const gift =
        document.getElementById(
            "gift"
        );


    const envelope =
        document.getElementById(
            "envelope"
        );


    if (image) {

        image.src =
            memories[0].image;

    }


    if (caption) {

        caption.textContent =
            memories[0].caption;

    }


    if (number) {

        number.textContent =
            "01 / 03";

    }


    if (button) {

        button.innerHTML =
            'Next memory <span>→</span>';

    }


    if (gift) {

        gift.classList.remove(
            "opened"
        );

    }


    if (envelope) {

        envelope.classList.remove(
            "open"
        );

    }


    const confetti =
        document.getElementById(
            "confetti"
        );


    if (confetti) {

        confetti.innerHTML = "";

    }


    goTo("intro");

}


/* =========================================
   INITIAL LOAD
   ========================================= */

window.addEventListener(
    "load",
    function() {

        createParticles(22);

    }
);
