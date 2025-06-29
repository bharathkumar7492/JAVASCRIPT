//  for loop

for(let i=1;i<=5;i++)
{
    console.log(i)
}

// while loop

let num=10
while(num<=15)
{
    console.log(num)
    num++
}

// for in

let arr = [10,20,30,40,50]
for (let index in arr)
{
    console.log(index,arr[index])
}

// for of loop for array

for (let ele of arr)
{
    console.log(ele)
}

//  in string

let str="barath"

for (let ele of str)
{
    console.log(ele)
}

// for-in  loop in object

let ob={
    sname:"barath",
    age:22
}

for(let key in ob){
    console.log(key)
}