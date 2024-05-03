// function sum(a){
//     return a.name-a.status
// }
// console.log(sum({name:1,status:2}));


// Task-2
// function sum(a){
//     return a.width*a.length*a.height
// }
// console.log(sum({ width: 2, length: 5, height: 1 }));



// Task-3
// function sum(a){
//     let cnt = {
//         "Needs":a*0.5,
//         "Wants":a*0.3,
//         "Savings":a*0.2
//     }
//     return cnt
// }
// console.log(sum(10000));



// Task4
// function sum(a){
//     let obj = {
//         "Darth Vader" : "Father",
//         "Lein" : "sister",
//         "Hen" : "brother in law",
//         "R2D2" : "droin"
//     }
//     return `Luke, i am your ${obj[a]}`
// }
// console.log(sum("Lein"));


// Task-5
// function sum(a){
//     return `${a.name} has population of ${a.population} and his situated in ${a.continent}`
// }
// console.log(sum({ name: "Paris", population: "2,140,526", continent:"Europe"}));



function sum(a){
    let cnt = a.filter((value,index) => {
        return a.indexOf(value)==index
    })
    return cnt
}
console.log(sum([1,2,2,3
    ,4,5,5,4]));
