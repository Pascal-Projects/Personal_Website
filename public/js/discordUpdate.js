window.onload = function (){
    let image = document.getElementById("discord");

    function updateImage(){
        image.src = image.src;
    }

    setInterval(updateImage, 1000)
}