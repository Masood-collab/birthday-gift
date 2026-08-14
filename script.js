/* =========================================
   PREMIUM BIRTHDAY EXPERIENCE
   ========================================= */

let currentMemory = 1;

const memories = [

    {
        image: "Screenshot_2026-08-02-21-13-33-332_com.miui.mediaviewer.jpg",
        caption: "A beautiful memory ✦"
    },

    {
        image: "B612_20220531_173320_089.jpg",
        caption: "A moment worth remembering ♡"
    },

    {
        image: "Snapchat-1575289812.jpg",
        caption: "One more beautiful moment ✨"
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

    if (nextScreen) {

        nextScreen.classList.add("active");

        createParticles(12);

    }

}


/* =========================================
   GIFT
   ========================================= */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const hint =
        document.getElementById("giftHint");

    gift.classList.add("opened");

    hint.style.opacity = "0";

    createParticles(55);

    setTimeout(function() {

        goTo("memories");

    }, 1500);

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


    }, 450);


    if (currentMemory === 3) {

        button.textContent =
            "Continue →";

    }

}


/* =========================================
   FINAL
   ========================================= */

function showFinal() {

    createParticles(90);

    goTo("finalScreen");

}


/* =========================================
   GOLDEN PARTICLES
   ========================================= */

function createParticles(amount) {

    const symbols = [
        "✦",
        "✧",
        "⋆",
        "✨",
        "♡"
    ];


    for (let i = 0; i < amount; i++) {

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
            (10 + Math.random() * 20) + "px";


        particle.style.animationDuration =
            (3 + Math.random() * 4) + "s";


        particle.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(
            particle
        );


        setTimeout(function() {

            particle.remove();

        }, 8000);

    }

}


/* =========================================
   INITIAL PARTICLES
   ========================================= */

window.addEventListener("load", function() {

    createParticles(25);

});
