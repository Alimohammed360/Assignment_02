
function save() {
    let Students = {
        name1: prompt("Enter Students Name:"),
        age1: +prompt("Enter Students Name:"),
        instructor1: prompt("Enter Students Name:"),
    }
    console.log(Students)
    let string = JSON.stringify(Students)
    localStorage.setItem("Students", string)
    console.log(Students)
}
save()