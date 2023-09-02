window.onload = function (){
    let image = document.getElementById("discord");
    let src = image.src;

    function updateImage(){
        //image.src = image.src.split("?")[0] + "?" + new Date().getTime() + "idleMessage=Currently%20chillin...&bg=474d58&showDisplayName=true&hideBadges=true";
        image.src = image.src.split("?")[0] + "?" + new Date().getTime() + "idleMessage=Contact%20me%20even%20if%20I'm%20offline...&bg=211a1dff&showDisplayName=true&hideBadges=true";
    }

    setInterval(updateImage, 1000)
}