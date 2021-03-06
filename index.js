function checkScore(number) {
    var result;

    /**WRITE YOUR CODE BELOW THIS LINE**/
    
    
    // if number is greater than 90, assign result as 'Your score is over 90'
if(number > 90) {
    result = "Your score is over 90"
    console.log(result)
}else if(number < 90 && number > 70) {

    // else if number is between 90 and 70, assign result as 'Your score is between 90 and 70'
result ="Your score is between 90 and 70"

console.log(result)
} else if(number < 70) {
    // else if number is less than 70, assign result as 'Your score less than 70'
result = "Your score less than 70"
}
    /**WRITE YOUR CODE ABOVE THIS LINE**/

    return result
}

module.exports = {
    checkScore
}