function activateButtons() {
    // Add active class to the current button (highlight it)
    let btnContainer = document.getElementById("myBtnContainer");
    let btns = btnContainer.getElementsByClassName("btn");
    for (const element of btns) {
        element.addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function filter(f) {
    let row = document.getElementById("row")
    row.innerHTML = ""

    let modal = document.getElementById("modal-content")
    modal.innerHTML = ""

    let counter = 1;

    for (let file in files) {
        let split = files[file].split("/")
        console.log(split)
        if (f == "all") f = ""
        if (split[1].includes(f)) {
            let column = document.createElement("div")
            column.className = "column"

            let a = document.createElement("a")
            a.href = "javascript:void(0);"
            a.setAttribute("onclick", "openModal();currentSlide(" + counter + ");")

            let img = document.createElement("img")
            img.src = "./images/" + split[0]
            img.className = "hover-shadow"
            img.style.width = "100%"

            a.appendChild(img)

            column.appendChild(a)

            row.appendChild(column)

            let d = document.createElement("div")
            d.className = "mySlides"

            let img2 = document.createElement("img")
            img2.src = "./images/" + split[0]

            d.appendChild(img2)

            modal.appendChild(d)

            counter++;
            console.log(files[file])
        }
    }

    // Add Next/previous controls
    let prev = document.createElement("a")
    prev.className = "prev"
    prev.setAttribute("onclick", "plusSlides(-1);")
    prev.innerHTML = "&#10094;"
    modal.appendChild(prev)
    let next = document.createElement("a")
    next.className = "next"
    next.setAttribute("onclick", "plusSlides(1);")
    next.innerHTML = "&#10095;"
    modal.appendChild(next)
}