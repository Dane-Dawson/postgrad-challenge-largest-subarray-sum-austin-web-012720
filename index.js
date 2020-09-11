function largestSubarraySum(array){

    let newArray = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    array.forEach(element => {
        if (element > 0){
        newArray.push(element)}
    });
    // This is a comment just for a commit
    return newArray.reduce(reducer)
   }
