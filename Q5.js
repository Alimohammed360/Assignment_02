function changeColor() {
    let colorChange = document.getElementById("color")
    let color = Math.round(Math.random() * 1000000)
    colorChange.style.backgroundColor = "#" + color
}

changeColor()