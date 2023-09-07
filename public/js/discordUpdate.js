window.onload = function () {
    let image = document.getElementById("discord");

    function updateImage() {
        image.src = image.src.split("?")[0] + "?" + "bg=474d58&showDisplayName=true&hideBadges=true&idleMessage=Currently%20chillin...&" + new Date().getTime();
    }

    setInterval(updateImage, 500)
}