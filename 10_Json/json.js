let ob={
    sname: "barath",
    age: 22,
    phno: 123232422
}
console.log(ob)

            // 1.json.stringify()

// this method is used to convert any javascript object into json string.

let jsonData = JSON.stringify(ob)

console.log(jsonData)
console.log(typeof jsonData)

            // 2.json.parse()

// this method is used to convert json string data into jacvascript object

let parseOb = JSON.parse(jsonData)

console.log(parseOb)
console.log(typeof parseOb)

// JSON(javascript Object Notation) is a lightweight data-interchange format.
// that is easy for human read and write,and easy for machine to parse and generate.

// ! ADVANTAGES OF JSON:

// ? Human-Readable:
// JSON'S structure is easy for developers to understand and write.

// ? Lightweight:
//  JSON is a minimal format that reduce the size of the data being transmitted

// ? Language-Independent:
// JSON can be used with any 