// let obj = {
//     push: (val) => {
//         return val + 2
//     }
// }

// console.log(obj.push(4));

// const array = [1,2,3,4,5,6]
// array.push("Ibrohim")
// console.log(array);

let word = "Javascript"
// let num = 5
// console.log(word.slice(0, 4));

// console.log(typeof num);
// console.log(typeof num.toString());
let slicedString = word.slice(0, 4)
// console.log(slicedString.length);

// let user = {
//     name: "Ibrohim",
//     surname: "Turaboev",
//     fullname: function () {
//         return this.name + " " + this.surname
//     }
// }

// console.log(user.fullname());

function show(num, func) {
    console.log("This is 1 " + num);
    func(num)
}

show(4, (number) => {
    console.log("This is 2 " + number)
})