// Array is one linear data structure where multiple value can be stored in continuous manner

// In javascript array will store both homogenius and hetrogenius 


let arr = [18,"virat",true,[30,40]]

let arr2 = [10,20,30,40,50]

    // how to access array element
console.log(arr2[2])        //30

        //  how to know the length of an array
console.log(`the length of the arr2 is ${arr2.length}`)


            // Array Methods

            // 1.push 
// method is use to add element at end of array and it will return length of the modified array(lebgth after adding the element)

let arr3=[10]
arr3.push(20)
console.log(arr3)

            // 2.pop
// pop method is use to remove the last element of array 

// it will return the removed element.

let arr4=[10,20,30]
arr4.pop(30)
console.log(arr4)
console.log(arr4.pop())

            //  3.unshift
// it is used to add any element at the starting of the array
// it will return the length of the modified array
 
let arr5=[10,20,30]
arr5.unshift(8)
console.log(arr5)

                // 4.shift
// this method is use to remove the first element of array 
// it will return the removed element.

let arr6=["virat","rohit","dhoni"]
arr6.shift()
console.log(arr6)

                // 5.includes
// it is use to check wheather the given element is present or not in the array.
// if it is present it return true otherwise it will return false

let arr7=["html","css","js"]

console.log(arr7.includes("html"))
    console.log(arr7.includes("css"))

                    // 6.reverse()
// it will reverse the array and it will return one new array.
// this method will modify the original array.

let arr8=[10,20,30,40,50]

let reverseArr=arr8.reverse()

console.log(reverseArr)
console.log(arr8)


                // join

// this method used to convert array into string

let charArr=['h','e','l','l','o']

let str=charArr.join("")
// let str=charArr.join("-")
console.log(str)




// reverse string by using in-built methods

let subjectname="javascript"

let convertArr=subjectname.split("")
// console.log(convertArr)
let revArr=convertArr.reverse()
console.log(revArr)

let revstr=revArr.join("")
console.log(revstr)

                // 8.indexof()

let team=['gt','csk','rcb','mi','pk']

console.log(team.indexOf('csk'))

                // 9.s;ice

                // 10.splice

let names=["rohit","virat","rahul","iyar","jadeja","dhoni"]
// delete count
// names.splice(1,2)
// console.log(names)      //['rohit', 'iyar', 'jadeja', 'dhoni']

// replace
// names.splice(0,1,"rinku")
// console.log(names)          //['rinku', 'virat', 'rahul', 'iyar', 'jadeja', 'dhoni']

// add
names.splice(1,0,"pant")
console.log(names)           //   ['rohit', 'pant', 'virat', 'rahul', 'iyar', 'jadeja', 'dhoni']



                // Higher order Array 

                    // 1.forEach

// it is higher order array method. it is used to traverse the array.
// it will take one callback function there it have 3 parameters (element,index,array)

let numbers=[10,20,30,40,50,60]

numbers.forEach((ele,index,arr) => {

    console.log(ele, index, arr)
    
})

// how to add all elements of array by using forEach() method

let sum=0

numbers.forEach((ele)=>{
    sum=sum+ele
})
console.log(`the sum of the array elements: ${sum}`)


let mark=[10,20,30,40,50]

b=[]

mark.forEach((ele)=>{
   
    b.push(ele+100)
})
console.log(b)

                                          // 2.map()

// it is one higher order array method, it is used for traversing the array and if we want to do any operation with all the element we can do.
// this method return one new array.
// it can take 3 parameters.(element,index,array)

let markArr=mark.map((ele)=>{

    return ele+100
})
console.log(markArr)

let product = ["mobile","laptop","camara"]

let productArr=product.map((ele)=>{

    return ele.toUpperCase()
})
console.log(productArr)

// element who are greater than 20,by using forEach()?

let greater =[]

mark.forEach((ele)=>{

    if(ele>20)
    {
        greater.push(ele)
    }
})
console.log(greater)

                    // 3.filter()

// it is one higher order array method, it is used for traversing the array and it check the condition if the condition is true then it will return new array.
// it can take 3 parameters(ele,index,arr)

let filterArr=mark.filter((ele)=>{

    return ele>20
})
console.log(filterArr)

                    // 4.reduce

let add = mark.reduce((acc,ele)=>{

    return acc + ele
},0)

let mul = mark.reduce((acc,ele)=>{

    return acc * ele
},1)
console.log(add)
console.log(mul)
 
// task: find the value greater than 400 then add 200 for each value and then add those values and tell me the price

let price=[200,400,500,600,100]

let priceGreater=price.filter((ele)=>{

    return ele>400
})

let priceAdd=priceGreater.map((ele)=>{

    return ele + 200
})

let finalprice=priceAdd.reduce((acc,ele)=>{

    return acc + ele
},0)
console.log(priceGreater)
console.log(priceAdd)
console.log(finalprice)

                // 5.sort()

let ratings = [9,8,7,6,5,0,3,4,1,2]

console.log("asscending order")

let asc = ratings.sort((a,b)=>{

    return  a - b
}) 
console.log(asc)

console.log("decending order")

let dec = ratings.sort((a,b)=>{

    return b-a
})
console.log(dec)

if(undefined){
    console.log("hello")
}
else{
    console.log("hi")
}