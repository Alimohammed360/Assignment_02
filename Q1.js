function closure(abc){

    return function(def){
        console.log(def + abc)
    }
}
let print = closure(5)
print(8)
