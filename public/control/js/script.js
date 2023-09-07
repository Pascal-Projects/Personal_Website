window.onload = function () {
    let iframe = document.getElementById("status");

    function updateImage() {
        iframe.contentWindow.location.reload();
    }

    setInterval(updateImage, 10000)
}