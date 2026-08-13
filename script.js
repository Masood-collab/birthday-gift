/* =========================================
   BIRTHDAY PREMIUM TEMPLATE
   ========================================= */

let currentMemory = 1;


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

    }
}


/* =========================================
   GIFT OPENING
   ========================================= */

function openGift() {

    const gift =
        document.querySelector(".gift");

    const hint =
        document.getElementById("giftHint");


    gift.classList.add("opened");

    hint.style.opacity = "0";


    /* Golden particles */

    createParticles(45);


    /* Move to memories */

    setTimeout(function() {

        goTo("memories");

    }, 1400);
}


/* =========================================
   MEMORY DATA
   ========================================= */

const memories = [

    {
        image: "photo1.jpg",
        caption: "A beautiful memory ✦"
    },

    {
        image: "photo2.jpg",
        caption: "A moment worth remembering ♡"
    },

    {
        image: "photo3.jpg",
        caption: "One more beautiful moment ✨"
    }

];


/* =========================================
   NEXT MEMORY
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


    /* If memories are finished */

    if (currentMemory >= 3) {

        goTo("letterScreen");

        return;

    }


    currentMemory++;


    /* Fade old image */

    image.classList.add("changing");


    setTimeout(function() {

        image.src =
            memories[currentMemory - 1].image;

        caption.textContent =
            memories[currentMemory - 1].caption;

        number.textContent =
            "0" + currentMemory + " / 03";


        image.classList.remove("changing");


    }, 400);


    /* Change final button */

    if (currentMemory === 3) {

        button.textContent =
            "Continue →";

    }
}


/* =========================================
   FINAL SCREEN
   ========================================= */

function showFinal() {

    createParticles(70);

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
            (3 + Math.random() * 3) + "s";


        particle.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(
            particle
        );


        setTimeout(function() {

            particle.remove();

        }, 7000);

    }
}


/* =========================================
   STARTING PARTICLES
   ========================================= */

setTimeout(function() {

    createParticles(20);

}, 800);
