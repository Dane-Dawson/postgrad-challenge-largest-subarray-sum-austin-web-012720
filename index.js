function largestSubarraySum(array){

    let newArray = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    array.forEach(element => {
        if (element > 0){
        newArray.push(element)}
    });
    return newArray.reduce(reducer)
   }
