
//  how to create object

let student={
    sname: "barath",
    age: 23,
    isPlayer: true,
    sub: ["html","js","java","python"],
    do: ()=>{
        console.log("eat,sleep,study")
    },
    adress:{
        city: "chennai",
        pin: 560085
    }
}

console.log(student)
// how to access object property

console.log(`The name of the student is ${student.sname}`)
console.log(`Age of the student is ${student.age}`)
console.log(`Studen city is ${student.adress.city}`)
console.log(`Subjects: ${student.sub}`)
console.log(student.sub)

// how to add element

student.phone=1234567890

console.log(student)

// how to update element

student.isplayer=false
console.log(student)

// how to delete

delete student.age
console.log(student)

student.sub.map((ele)=>{
    console.log(ele.toUpperCase())
})

            // 1.Object method

// this method is to use return all the keys in the form of array

let keys = Object.keys(student)
console.log(keys)

            //  2.object.values()

// this method is to use return all the values in the form of array

            
let values = Object.values(student)
console.log(values)

            // 3.object.entries(())

//  it will return one array where all the key and values will be stored seperate one one array.

let key_value = Object.entries(student)
console.log(key_value)

            // 4.object.freeeze()

let ob1={
    sname:"kumar"
    
}
console.log(ob1)

Object.freeze(ob1)

console.log("after freeze")

ob1.phone=12324231   //we can not add
delete ob1.age      //can not delete
ob1.age=44           //can not modify
console.log(ob1)

        // 5.object.frozen()

// it is used to check wheather any object is frozen or not
// id it is frozen it will return true else it will return false

console.log(Object.isFrozen(ob1))           //true
console.log(Object.isFrozen(student))           //false


        // 6.object.seal()

// it is also similar to object.freeze() method,we can not add or we can naot delete but we can modify

let ob2={
    sname:"tyson",
    age:23
    
}

console.log(ob2)

Object.seal(ob2)

console.log("after use object.seal")

ob2.phno=1131313323  //can not add
delete ob2.age      //can not delete
ob2.age=44                      //can modify
console.log(ob2)

                // 7.object.Sealed

// it is used to check wheather any object is sealed or not
// id it is frozen it will return true else it will return false


console.log(Object.isSealed(ob2))           //true
console.log(Object.isSealed(student))           //false

                // 8. object.assing()

let ob3={
    sname:"rahul",
    age:22
}

let ob4={
    sname:"rohit",
    add:"chennai"
}

// let newOb= Object.assign(ob3,ob4)
let newOb= Object.assign({},ob3,ob4)

console.log(newOb)
console.log(ob3)
console.log(ob4)

        // 9.objectNmae.hasOwnproperty

// this method is used known any property is present or not and it will return boolean strin

console.log(ob4.hasOwnProperty("add"))      //true
console.log(ob4.hasOwnProperty("pin"))      //true
