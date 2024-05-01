if(1){
console.log(1)
};

console.log('3'+ true)
console.log('3'- 3)


var a = '100';
console.log(typeof a)

var b = Number(a)
console.log(typeof b);

for(var i =1; i<10; i++){
    console.log('mohsen');
}

for(var i=1; i<1000; i++){
    if(i%2==0){
        continue;

    }
    console.log(i);
    

}

console.log('3'+ true)
console.log('3'- '3')

// mm

for(var t = 1; t<=2; t++){
    console.log('outer' + b++)
    {
        console.log('inner'+b)
    }
}


var array1 = [1, true, "mohsen", false, 123]
console.log(array1)
let x = array1.toString()
console.log(x)
console.log(array1.join('    @    '))