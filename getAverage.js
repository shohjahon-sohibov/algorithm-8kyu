/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.  */

// Rating 8

function getAverage(marks){
    let sum = marks.reduce((a, b) => a + b, 0)
    let arrLength = marks.length
    let result = sum / arrLength 
    return Math.floor(result)
  }
