function reverseWords(str){
    let arr =  str.split(" ")
    let result = ""
    for(i = 0; i < arr.length; i++) {
      if(arr.length > 1) {
        result += `${arr.slice(-1)} `
      }
      if(arr.length == 1) {
        result += arr.slice(-1)
      }
      arr.pop()
      i-- 
    }
      return result ; // reverse those words
  }