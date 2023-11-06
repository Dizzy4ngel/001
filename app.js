function smallBig(arr){
    return [Math.min(...arr), Math.max(...arr)]
} 


console.log(smallBig([]))

module.exports=smallBig