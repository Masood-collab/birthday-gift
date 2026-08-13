function openGift() {

    const gift = document.querySelector(".gift");

    const message =
        document.getElementById("message");

    const instruction =
        document.querySelector(".instruction");


    /* Open gift */

    gift.classList.add("opened");


    /* Hide instruction */

    instruction.style.display = "none";


    /* Show birthday message */

    setTimeout(function () {

        message.classList.remove("hidden");

    }, 600);


    /* Create hearts */

    createHearts();


    /* Create confetti */

    createConfetti();
}


/* Hearts */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "💖";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 5000);
    }
}


/* Confetti */

function createConfetti() {

    const symbols = [
        "✨",
        "🎉",
        "⭐",
        "💫",
        "🎊"
    ];


    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.className =
            "confetti";

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.animationDelay =
            Math.random() * 2 + "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(function () {

            confetti.remove();

        }, 4000);
    }
}
