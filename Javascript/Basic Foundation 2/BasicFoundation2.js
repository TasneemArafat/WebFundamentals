// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr) {
    for(var i = 0; i<arr,length;i++){
        if(arr[i]>=0){
            arr[i]="big";
        }
    }
    return arr;
}

// Print Low, Return High - Create a function that takes in an array of numbers.  
// The function should print the lowest value in the array, and return the highest value in the array.

function prLowRetHigh () {
    var low = 0;
    var high = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]<low){
            low=arr[i];
        }
        if(arr[i]>high){
            high = arr[i];
        }
    }

console.log(low);
return high;
}

// Print One, Return Another - Build a function that takes in an array of numbers.  
// The function should print the second-to-last value in the array, and return the first odd value in the array.

function prOneRetAnother (arr) {
    var one = arr[arr.length-2];
    console.log(one);
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !=0){
            return arr[i];
        }
    }
}

// Double Vision - Given an array (similar to saying 'takes in an array'),
//  create a function that returns a new array where each value in the original array has been doubled.
//   Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr) {
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr[i] = arr[i]*2;
    }
    return newArr;
}

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.
//   Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function positives (arr) {
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum++;
        }
    }
    arr[arr.length-1] = sum;
    return arr;
}

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".
// Every time the array has three evens in a row, print "Even more so!".

function OddandEven (arr) {
    for(var i=0;i<arr.length;i++){
        var odd = 0;
        var even = 0;
        for(var j=i;j<i+3;j++){
            if(arr[j]%2 != 0){
                odd++;
            }
            else if(arr[j] %2 == 0){
                even++;
            }
        }
        if(odd == 3) {
            console.log("That's Odd");
        }
        else if(even ==3) {
            console.log("even more so!");
        }
    }
}


// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
// Afterward, console.log each array value and return arr.

function IncSecond (arr) {
    for(var i = 0;i<arr.length;i++){
        if(i%2 != 0){
          arr[i] = arr[i]+1;
        }
        console.log(arr[i]);
    }
    return arr;
}

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
// Working within that same array, replace each string with a number - the length of the string at the previous array index - 
// and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. 
// Hint: Can for loops only go forward?

function prevLength (arr) {
    for(var i = arr.length-1;i>0;i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original,
//  but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven (arr) {
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr[i]=arr[i]+7;
    }
    return newArr;
}

// Reverse Array - Given an array, write a function that reverses its values, in-place. 
//  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
//  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray (arr) {
    var temp=0;
    for(var i=0;i<arr.length/2;i++){
        temp=arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, 
// but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function allNegatives(arr) {
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=0){
            newArr[i]=arr[i];
        }
        else {
            newArr[i]=arr[i]*-1;
        }
    }
    return newArr;
}

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
// If no array values are "food", then print "I'm hungry" once.

function hungry (arr) {
    var sum = 0;
    for(var i =0;i<arr.length;i++){
        if(arr[i]=="food"){
            console.log("yummy");
        }
        else {sum++;}
    }
    if(sum == arr.length){
        console.log("I'm hungry");
    }
}

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
// Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true]
function reverseArray (arr) {
    var temp=0;
    for(var i=0;i<arr.length/2;i+=2){
        temp=arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, 
// and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function scaleArray (arr,num){
    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i]*num;
        }
    return arr;
}


