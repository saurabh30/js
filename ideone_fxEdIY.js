/*
  Program to print element
  with highest frequency 
  in an array.
*/

/*
  takes array as input and returns the
  highest frequency element
*/
function maxFreqElement (arr) {
	
// sorts the given array in ascending order 
    arr.sort(function(a, b){return a - b});
  
    var currNum = arr[0];
    var currCnt = 1;
  
    var maxNum = arr[0];
    var maxCnt = 1;
  
/*
   iterates through entire array and
   stores the max frequency element in
   maxNum
*/
  for(var i = 1; i<arr.length; i++) {
  	
      if(arr[i] == currNum) {
          currCnt++;
      } else {
           if(currCnt > maxCnt) {
               maxCnt = currCnt;
               maxNum = currNum;
            }
            currNum = arr[i];
            currCnt = 1;
      }  
      
  }
  return maxNum;
}

var arr = [5, 5, 3, 3, 2, 3];//input array
print(maxFreqElement(arr));

