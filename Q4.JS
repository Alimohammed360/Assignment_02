function addPara(text) {
    let para = document.querySelector("ul")
    para.innerHTML = text
}

addPara("<li>"+prompt("Enter your List Items")+"</li>")