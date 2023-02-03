//WhiteBoarding Friday Solved Project prompts:
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//first prompt: solved without recursion.

function loopThisUrl(url) {
  let stringArr = [];
  for(let i = 0; i < url.length; i++)
    {
      if(url[i] === " "){
        stringArr.push('%20');
      }
      else
      {
        stringArr.push(url[i]);
      }
    }
  return(stringArr.join(' '))
}
const doThis = loopThisUrl('Jasmine Ann Jones');

console.log(doThis("Jasmine Ann Jones"));
// edge cases for this problem: 
//Input string with non-printable characters: The function may not handle non-printable characters correctly, and they may get lost during the conversion process.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//first prompt: solving the problem with recursion.

function replaceSpaces(url, index =0, stringArr = []){
  if (index === url.length){
    return stringArr.join(" ");
  }
  if (url[index] === ' '){
    stringArr.push('20%')
  } else {
    stringArr.push(url, index + 1, stringArr);
  }
  return replaceSpaces(url, index + 1, stringArr);
}
const result = replaceSpaces('Jasmine Ann jones');

  console.log(replaceSpaces('Jasmine Ann jones'))

  //edge cases for this problem:
  //Case with only spaces: replaceSpaces(" ")


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//prompt 2: Array Deduping done without recursin:

function removeDuplicates(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return results;
}
console.log( removeDuplicates([7, 9, 'hi', 12, 'hi', 7, 53]));

 //edge cases for this problem:
 //Input array length: The function should handle arrays of different lengths including arrays with 0 or 1 elements.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//prompt 2: array deuping done with recursion

function remvoeDuplicates(arr, index = 0, uniqueArray = []) {
  if(index === arr.length)
    return uniqueArray;
}
if(uniqueArray.indexOf(arr[index]) === -1){
  uniqueArray.push(arr, index + 1 ,uniqueArray);
}
console.log(removeDuplicates([7, 9, 'hi', 12, 'hi', 7, 53]));

 //edge cases for this problem:
 //Handling of empty arrays: If the input array is empty, the implementation returns an empty array which might not be what is expected in some cases. It is important to handle such cases and return an appropriate result.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Prompt 2: array deuping done with filter

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(7, 9, "hi", 12, "hi", 7, 53))

 //edge cases for this problem:
 //Input with empty array: removeDuplicates([]) - The function should handle the input of an empty array and return an empty array.


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//prompt 3 compressing strings without recursin

function compressString(str){
  let result = " ";
  let count = 1;
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){
      count++;
    } else {
      result += count + str[i];
      count = 1;
    }
  }
  return result;
}
  console.log(compressString('aaabccddda'));

   //edge cases for this problem:

   //What happens if the input string contains non-alphabetic characters? The function will still try to compress the string, but the resulting compressed string may contain characters that are not letters, which may not be suitable for some applications.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//prompt 3: compressing strings with recursin:

function compressString(str, index = 0, result = "", count = 1) {
  if (index === str.length) {
    return result;
  }
  if (str[index] === str[index + 1]) {
    count++;
  } else {
    result += count + str[index];
    count = 1;
  }
  return compressString(str, index + 1, result, count);

}  
console.log(compressString("aaabccdddda"));

 //edge cases for this problem:
//An empty string: the function should return an empty string as the result.

 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //prompt 4: checking for uniqueness

  function isUnique(str){
    for(let i = 0; i < str.length; i++){
      for(let j = i + 1; j < str.length; j++){
        if(str[i] === str[j]){
          return false;
        }
      }
    }
    return true;
  }
   console.log(isUnique('hello'));  
  console.log(isUnique('copyright'));  

   //edge cases for this problem:
   //Input string with special characters, numbers, and symbols, to see how the function handles these characters.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //prompt 5: using bubble sort solve the problem:

  function bubbleSorter(arr){
    let swapped;
    for(let j = 0; j < arr.length - 1; j++){
      swapped = false;
      for(let i = 0; i < arr.length - 1 - j; i++){
        if(arr[i] > arr[i + 1]){
          let temp = arr[i];
          arr[i] = arr[i];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
      if(!swapped) break;
    }
    return arr;
  }
  console.log(bubbleSorter([9, 2, 7, 12]));
 //edge cases for this problem:
 //The input argument should be an array.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~