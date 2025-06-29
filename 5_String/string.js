// console.log("hi")
                    // `` string interpolation
// let a=10;
// let b=20;

// console.log("sum of"+a+"and"+b+"="+(a+b))

// console.log(`sum of ${a} and ${b} =${a+b}`)

// let x="welcome to 'chennai'"
// console.log(x)

// let y='welcome to "chennai"'
// console.log(x)

                            // length()
let a="    laptop     "
console.log(a)
console.log(a.length)

                        // trimStart()
console.log(a.trimStart())
console.log(a.length)

let b=a.trimStart();
console.log(b)
console.log(b.length)

                        // trimEnd()
console.log(a.trimEnd())
console.log(a.length)

let c=a.trimEnd()
console.log(c)
console.log(c.length)

                    // trim()
console.log(a.trim());
console.log(a.length);

let d=a.trim();
console.log(d)
console.log(d.length)

                        // uppercase()
let str="this is string"
console.log(str);
newupdatestring=str.toUpperCase();
console.log(newupdatestring);

                    // lowercase()
newstring=str.toLocaleLowerCase();
console.log(newstring)

                        // replace()
let str2="tyyo tyyo amma appa"
console.log(str2)
newupdatestring=str2.replace("t","i")
console.log(newupdatestring)

                    // replaceAll()
newstring=str2.replaceAll("t","i")
console.log(newstring)

new2string=newstring.replaceAll("m","n");
console.log(new2string)

string=new2string.replace("appa","thambi")
console.log(string)

                        // substring and slice
let str3="iyyo iyyo amma appa";
console.log(str3)

console.log(str3.substring(10,14))
console.log(str3.slice(10,14))

console.log(str3.substring(14,10))
console.log(str3.slice(14,10))

console.log(str3.substring(-9,-5))
console.log(str3.slice(-9,-5))

                        // splite( ) and indexof()
let str4="i love javascript"

console.log(str4.split(" "))

console.log(str4.indexOf("a"))
console.log(str4.indexOf("a","9"))

                        // charAt()
let str5="i love javascript"
console.log(str5.charAt(0))

                        // lastindexof
let str6="i love javascript"
console.log(str6.lastIndexOf("l"))  

                        // concat
let firstName="bharath";
let scondName="kumar";

let complete=firstName.concat(scondName);
console.log(complete)
console.log(firstName+scondName)
console.log(firstName,scondName)

                            // tostring
let s=10;
console.log(typeof s)
let NewString=s.toString()
console.log(typeof NewString)

let isboolean=true;
console.log(typeof isboolean)

