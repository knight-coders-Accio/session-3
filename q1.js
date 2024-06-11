// q1:
// let take two arrray : 
//find sum of corropoding element and stroe it in arr3. 

let a1 = [10,20,30,40,50]
let a2 = [100,200,300,400,500]

let arr3 = [] // [110,220]


for(let i = 0; i<=a1.length-1; i++){
     arr3.push(a1[i] + a2[i])
}

console.log(arr3) // [110,220,330,440,550]