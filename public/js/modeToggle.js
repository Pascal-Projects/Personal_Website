function toggle(){
    let toggleElement = document.getElementById("toggle");
    if (toggleElement.getAttribute("src") == "./assets/moon.svg"){
        toggleElement.setAttribute("src", "./assets/sun.svg")
    } else {
        toggleElement.setAttribute("src", "./assets/moon.svg")
    }
    document.getElementById("head").classList.toggle("headDark");
    document.getElementById("head").classList.toggle("headWhite");
    document.body.classList.toggle("darkmode")
    let icons = document.getElementsByClassName("icon")
    for (let x in icons){
        icons[x].classList.toggle("social-iconDark")
    }

    const root = document.querySelector(":root")
    console.log(getComputedStyle(root).getPropertyValue("color-scheme"))
}

