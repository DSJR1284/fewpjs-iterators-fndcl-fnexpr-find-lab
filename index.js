
let superbowlWin = (record) => {
    let result = record.find(record => record.result === "W")
    return !!result ? result.year : undefined
}

// const superbowlWin = (record) => {
//     let results = record.find(record => record === "W")
//    if (results.result === "W"){
//     return results  
//    } else { (results.year) 
//     return undefined
//    }
// }