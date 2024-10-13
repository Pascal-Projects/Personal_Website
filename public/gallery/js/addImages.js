window.onload = (event) => {
    console.log("page is fully loaded");

    let files = ["DSC01752.JPG",
        "DSC017522.JPG",
        "DSC01761.JPG",
        "DSC01767.JPG",
        "DSC01768.JPG",
        "DSC01771.JPG",
        "DSC01772.JPG",
        "DSC01776.JPG",
        "DSC01777.JPG",
        "DSC01778.JPG",
        "DSC01782.JPG",
        "DSC01795.JPG",
        "DSC01796.JPG",
        "DSC01803.JPG",
        "DSC01805.JPG",
        "DSC01806.JPG",
        "DSC01808.JPG",
        "DSC01811.JPG",
        "DSC01821.JPG",
        "DSC01822.JPG",
        "DSC01823.JPG",
        "DSC01826.JPG",
        "DSC01830.JPG",
        "DSC01838.JPG",
        "DSC01842.JPG",
        "DSC01846 BW.JPG",
        "DSC01846.JPG",
        "DSC01850.JPG",
        "DSC01853.JPG",
        "DSC01854.JPG",
        "DSC01856.JPG",
        "DSC01859.JPG",
        "DSC01862.JPG",
        "DSC01865.JPG",
        "DSC01872.JPG",
        "DSC01876.JPG",
        "DSC01877.JPG",
        "DSC01880.JPG",
        "DSC01881.JPG",
        "DSC01884.JPG",
        "DSC01891.JPG",
        "DSC01893.JPG",
        "DSC01894.JPG",
        "DSC01896.JPG",
        "DSC01898.JPG",
        "DSC01902.JPG",
        "DSC01906.JPG",
        "DSC01907.JPG",
        "DSC01912.JPG",
        "DSC01917.JPG",
        "DSC01921.JPG",
        "DSC01925.JPG",
        "DSC01927.JPG",
        "DSC01950.JPG",
        "DSC01953.JPG",
        "DSC01964.JPG",
        "DSC01965.JPG",
        "DSC01971.JPG",
        "DSC01983.JPG",
        "DSC01984.JPG",
        "DSC01990.JPG",
        "DSC01992.JPG"
    ]

    let counter = 1;
    let row = document.getElementById("row")

    for (let file in files) {
        let column = document.createElement("div")
        column.className = "column"

        let a = document.createElement("a")
        a.href = "javascript:void(0);"
        //a.onclick = "openModal();currentSlide(0)"
        a.setAttribute("onclick", "openModal();currentSlide(" + counter + ");")

        let img = document.createElement("img")
        img.src = "./images/" + files[file]
        img.className = "hover-shadow"
        img.style.width = "100%"

        a.appendChild(img)

        column.appendChild(a)

        row.appendChild(column)


        let modal = document.getElementById("modal-content")

        let d = document.createElement("div")
        d.className = "mySlides"

        let img2 = document.createElement("img")
        img2.src = "./images/" + files[file]

        d.appendChild(img2)

        modal.appendChild(d)

        counter++;
        console.log(files[file])
    }
};



