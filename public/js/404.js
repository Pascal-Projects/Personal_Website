window.onload = function () {
    let image = document.getElementById("discord");

    function updateImage() {
        image.src = image.src.split("?")[0] + "?" + "idleMessage=Contact%20me%20even%20if%20I'm%20offline...&bg=211a1dff&showDisplayName=true&hideBadges=true&" + new Date().getTime();
    }

    setInterval(updateImage, 500)
}