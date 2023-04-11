let saveData = localStorage.getItem("Students")
let data = saveData ? JSON.parse(saveData): {}; 
function save() {
    let Students = {
        name1: prompt("Enter Students Name:"),
        age1: +prompt("Enter your Age Name:"),
        instructor1: prompt("Enter Instructor's Name:"),
    }

    let string = JSON.stringify(Students)
    localStorage.setItem("Students", string)
    console.log(Students)
}
save()
