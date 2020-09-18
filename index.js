function largestSubarraySum(array){

    let newArray = []
    let comparativeArray = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    array.forEach(element => {
        comparativeArray.push(element)
        if (element > 0){
        newArray.push(element)}
    });
    // let finalArray = []
    // why u not wurk?
    // if (newArray > comparativeArray){
    //     finalArray = newArray
    // }else if (comparativeArray > newArray) {
    //     finalArray = comparativeArray
    // }
    // return finalArray.reduce(reducer)
    return newArray.reduce(reducer)
   }
