// Write a function that returns true if every consecutive sequence of ones is followed by a consecutive sequence of zeroes of the same length.
function sameLength(inputString){
let i=0;
let oneCount=0;
let zeroCount=0;
while(i<inputString.length){
  while(inputString[i]==='1'){
    oneCount++;
    i++;
  }
  while(inputString[i]==='0'){
    zeroCount++;
    i++;
  }
  if(zeroCount!==oneCount){
    return false;
  }
}
return true;
}
console.log(sameLength("110011100010"));
console.log(sameLength("101010110"));
console.log(sameLength("111100001100"));
console.log(sameLength("111"));