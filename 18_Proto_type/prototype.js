// window object

console.log(this)           //this keyword will always return window object inside function also it will return the same 



                            // call() method & apply() method

let student ={
    sname:"barath",
    age: 23
}

function print(a,b){

    console.log(this)
    console.log(this.sname)
    console.log(this.age)

    console.log(a, b)

    
}

print.call(student, 30, 40)
print.apply(student,[100,200])

// apply method is same as call method  but here we pass value in array

let res= print.bind(student,300,400)
res()

// bind method is same as call method but normaly it does not give output ,to get output we have to store it in variable
