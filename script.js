function openGift() {

    const gift = document.querySelector(".gift");
    const message = document.getElementById("message");
    const instruction = document.querySelector(".instruction");

    gift.classList.add("opened");

    setTimeout(function() {
        message.classList.remove("hidden");
        instruction.style.display = "none";
    }, 600);
}
