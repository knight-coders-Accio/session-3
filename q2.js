// q2: solve using indexOf only: 
// let arr = ["m", "t", "a", "d", "m", "m", "d", "a", "t"]

// ["m", "t", "a". "d"]

// remove duplicate elements from the array

// let arr = [10,20,10,20,30,10,20,10,30,20,40,20,10]

// let newArray = [] // [10,20,30]



// for(let t of arr){

//     if(newArray.indexOf(t) == -1){  // if t is not present in newArray
//         newArray.push(t)
//     }
    

// }


// console.log(newArray)





// let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "I", "j"]

// print all vowels present in this Array


// for(let t of arr){
//      if(t == "a" || t== "A"
//         || t == "e" || t== "E"
//         || t == "i" || t== "I"
//         || t == "o" || t== "O"
//         || t == "u" || t== "U"
//         ){
//             console.log(t)
//         }
     
// }


let arr = ["x", "y","a", "b", "c", "d", "e", "f", "g", "h", "I", "j"]

let vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]


for(let t of arr){
     if(vowelsArray.indexOf(t) >=0){
            console.log(t)
     }
}