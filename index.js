// // write function that uses method find() single out spceif result 
// //want to find out if at any point in teams existnace they had won the supebowl
// //specifically year

// // record[0]: is that a win? Y
// // find --> record[0]

// // Write a function that takes an array called record
// function superbowlWin(record){ 
//     // Iterate over each season in the record
//     for (const season of record) {
//         // season: current object in record, record: the whole array
//         console.log(season.year);
//     //    let win = record.year
//         // console.log (winner.year)  
     
//     }
    
// }

// superbowlWin(record);
// //  record.find(superbowlWin(record))
// const numbers = [ 5, 6, 7 ];
// // 5: 5 > 6 ---- false
// // 6: 6 > 6 ---- false
// // 7: 7 > 6 ---- true
// // find --- 7
// numbers.find(number => {
//     return number > 6;
// });

// record.find(superbowlWin) 

// record.find(win => {
//     return item === win 
// })

// record[1].find(superbowlWin =>{
//     record.find(superbowlWin {

// //     })
// // //     return win === "W"
// // // })


// // function superbowlWin(record){
// //     win = record.find(game => game.record === "W")
      
// // }

// // console.log(superbowlWin(record))
// //  return win


// // console.log(superbowlWin())

// function superbowlWin(record) {
//     // Use the find method find the first object the record array where result is "W"
//     const win = record.find(game => game.result === "W");
  
//     // Return the win object if found, otherwise return undefined
//     return win;
//   }
//   const superBowlWin = superbowlWin(record);
// console.log(superBowlWin);
// ////

// // REDO THIS 
//should be 2015

// const superbowlWin = record.find((winner) => winner.result === "W")

// console.log (superbowlWin)

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
//if we find result that have no win objects return undifiend else return  2015
function superbowlWin(record){
    if (record.find(season=> season.result === "W")=== undefined){
        return undefined
    }
else{
    return record.find((season) => season.result === "W").year 
    
}}
