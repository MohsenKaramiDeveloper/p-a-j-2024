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


var array1 = [1, true, "mohsen", false, 123];
console.log(array1);
let x = array1.toString();
console.log(x);
console.log(array1.join('    @    '));
var w = array1.pop();
console.log(array1.join('    @    '));
console.log(w);



let arr1 = [1,2,3,4]

function add1(){

}

let add2 = function(){

}




// power



function power(base, exponent){
    let result = 1;
    for(let i=1 ; i<=exponent ; i++){
        result *= base;

    }
    return result;
}

console.log( power(33,33))







function isPrime (number){
    
    for(var i = 2 ; i<number ; i++){
        if (number % i == 0)
        return false;
    }
    return true;
}





//range

function rangePrime( firstNum , lastNum){
    var result = [];


    for( var i = firstNum ; i<= lastNum ; i++){
        if (isPrime(i) == true)
            result.push(i);
    }


    


}



// arrow function

var isPrime = (num) =>{

}

// callback


function callback( firstNum , lastNum){
    var result = [];


    for( var i = firstNum ; i<= lastNum ; i++){
        if (isPrime(i) == true)
            result.push(i);
    }


    


}

// scope
// globalscope
// let 
// var

