let arr = [1, 5, 3, 6, 9, 20, 12, 15, 14, 48, 13, 6, 11, 5]
let val = +prompt("Write a Numerical Value")
function search(num){
    let check = 0
    for(i=0;i < arr.length;i++){
        if(num === arr[i]){
        check = 1
        return true
    }
}
    if(check === 0){
        return false

    }
}
let searching = search(val)
console.log(searching)
