//WhiteBoarding Friday Solved Project prompts:
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//first prompt: solved without recursion.

function loopThis(url) {
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
  return(stringArr.join(''))
}
const doThis = loopThis('Jasmine Ann Jones');

console.log(doThis("Jasmine Ann Jones"));
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//prompt 3: compressing strings with recursin:

function compressString(str, index = 0, result = " ", count = 1)
  if (index === str.length){
  return result;
  }
  if(str[index] === str[index + 1]){
    count++
  } else{
    result += count + str[index];
    count = 1;
  }
  return compressString(str, index + 1, result, count);

  console.log(compressString("aaabccddda"));

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
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //prompt 5: using bubble sort solve the problem:


  function bubbleSort(arr){
    let swapped;
    for(let j = 0; < arr.length - 1; j++){
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
  console.log(bubbleSort([9, 2, 7, 12]));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~