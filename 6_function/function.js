                     // FUNCTION
 // Function is a block of code used to do specific task


                    // how to declare function

                // Named function

function add()
{
    let a=10;
    let b=20;
    let sum=a+b;

    console.log(`the addition of ${a} and ${b} is ${sum}`)

}
add(10,2)

console.log(add)

                // parameter function

function greet(uname)
{
    console.log(`good morning ${uname}`)
}

greet("barath")
greet("soniya")

                    // return keyword
function multiply(a,b)
{
    return a* b;
}
multiply(10,2)

let res=multiply(10,2)
console.log(res) 

// the function does not have any name ,that is called anonymous function

let anonymous=function()
                {
                    console.log("i am anonymous function")
                }

anonymous() 

                        //  Arrow function

let arrowFunction=()=>{
    console.log("i am arrow function...")
}

arrowFunction()

// find the area of triangle by using arrow function

let area=(h,b)=>{
    let res=1/2 + (h*b)
    console.log(`the area of triangle is:${res}`)

}
area(20,4)

                    // Nested functionn

// when we are declaring one function inside another function that is called nested function
let parent=()=>{
    console.log("i am parent function")

    let child=()=>{
        console.log("i am child function")
    }
    child()
}

parent()

             //***Lexical scopping in nested function ***

// if we are taking nested function,inner function can take all the properties of outer function but   outer function can not take the properties of inner function.it is called lexical scopping.  

let outer=( )=>{
    let a=10

    let inner=()=>{
        let b=20
        console.log(`value of a:${a}`)
        console.log(`value of b:${b}`)

    }
    inner()
    //  console.log(`value of b:${b}`)

}
outer()

                // higher order function   ***
// Any function that take another function as parameter that is called higher order function

                // callback function        ***
// the function wew are sending as a parameter to the higher order function is called callback function

let hof=(cb)=>{

    cb()

}

hof(()=>{
    console.log("I am callback function")
})

let addition=(a,b)=>{
    console.log(a + b)
}

let sub=(a,b)=>{
    console.log(a - b)
}

let mul=(a,b)=>{
    console.log( a * b)

}

let calculate=(myFunc,x,y)=>{
    myFunc(x,y)
}

calculate(addition,20,30)
calculate(sub,12,9)
calculate(mul,3,5);

                            // IIFE (Immediate Invoke Function Expression)

(function()
{
    console.log("i am IIFE function")
})();

(function(a,b)
{
    console.log(a+b)
})(2,4)
