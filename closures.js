

function counter (){
    let count = 0;

    return () => {count + 1}
}

let c = counter()
console.log(c()) 