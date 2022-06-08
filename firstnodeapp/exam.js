let s = "pwwkew";

let count = 0;
    let obj = [];;
    for(let i=0;i < s.length;i++){
        obj.push(s[i]);
          
    }
    console.log(obj );
  console.log( [...new Set(obj)].sort().length);
  console.log('first---------------------------------------------------------');


let nums = [3,2,4];
let target = 6;
var twoSum = function(nums, target) {
    
  let obj = {};
  for(let i = 0; i < nums.length; i++) {        
     let val = target - nums[i];
    
      if(val in obj) {
             return [obj[val], i];
      }
      obj[nums[i]] = i;
      
  }
 
};

console.log(twoSum(nums,target));


 let start = 0;
 let end  = nums.length - 1;
 let arr = [];
 for(let i = 0;i<= end;i++){
  for(let j = 0;j<= end;j++){
    if(nums[i] + nums[j] == target && i != j){
        arr.push(i );
     }
  }

     
 }
 console.log(arr);
 console.log('---------------------------------------------------------');
//Add Two Numbers

  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

 

let l1 = [2,4,3]; let l2 = [5,6,4];
var addTwoNumbers = function(l1, l2) {
  let head, c= head,  one = l1, two = l2, carry = 0;
  while(one || two) {
      let x = 0, y = 0, sum = carry, next, tmpNode;
      if(one.val){
          x = one.val;
      }
      if(two.val){
          y = two.val;
      }
      sum += x + y;
      carry = Math.floor(sum / 10);
      next = sum % 10;
      tmpNode = new ListNode(next);
      if(head == null){
          head =  new ListNode(next);
          c = head;
      }else{
          c.next = tmpNode;
          c = c.next;
      }
    if(one.next != null){
      one = one.next;
    }else{
      one = false
    }
    if(two.next != null){
      two = two.next;
    }else{
      two = false
    }
  }
  if(carry > 0){
      let tmpNode= new ListNode(carry);
      c.next = tmpNode;
  }
  return head;
};

console.log(addTwoNumbers(l1,l2));

 console.log('---------------------------------------------------------');


// var inputArr = [1 ,2 ,73, 4 ,5 ,86, 88];

// let start = 0;
// let count = inputArr.length -1;
// const newArr = [];
// if(inputArr.length != 0 ){
// while(start <= count){
//    let curlen =  inputArr[start].toString().length;
//   if(curlen == 1){
//     newArr.push(inputArr[start]);
//   }else if(curlen >= 2){
//       let len = curlen;
//       var num = 0;
//       while(len > 1){
//         num =  parseInt(inputArr[start] % 10) +  parseInt(inputArr[start] / 10) ;
//         inputArr[start] = num;
//         len = num.toString().length;
//       }
//     newArr.push(num);
//   }
//   start++;
// }
// }

// console.log(newArr);










// var inputArr = [2, 2, 1, 8, 5, 2, 6 ,99,99,100,100];
// const SortAndDuplicate = (arr) => {
//     arr.sort( (a,b) => a*1 -b*1);
//     const newArr = [];
//     newArr.push(arr[0]);
//     for(let i=1;i< arr.length;i++){
//         if(arr[i-1] != arr[i]){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr
// }
// const op = SortAndDuplicate(inputArr);
// console.log(op.join(' '))


// var uniqueAndSorted = [...new Set(inputArr)].sort( (a,b) => a*1 -b*1);
// console.log(uniqueAndSorted.join(' '));

// const SortAndDuplicate1 = (arr) => {
//   //arr.sort( (a,b) => a*1 -b*1);
//   const newArr = [...new Set(inputArr)].sort( (a,b) => a*1 -b*1);
//   return newArr
// }
// const op1 = SortAndDuplicate1(inputArr);
// console.log(op1.join(' '))



// Remove Duplicate

// Problem Statement
// Ram is a school teacher and in his record some of the student numbers are duplicates. Write a program to help ram to remove the duplicate

 

// Constraint 

// Input should be integer array

 

// Input Format
//               First line represents the number of testcases
//               Next lines represent the input for the corresponding testcases

 

// Output Format
//     Sorted and non-duplicated integers

 

// Sample Input 1 :
// 2
// 2 2 1 8 5 2 6
// 2 3 5 3 9 7 5
  
// output :  

// 2 1 8 5 6
// 2 3 5 9 7

 

// Sample Input 2 :
// 4
// 4 2 5 7 3 8 2 1 9 3
// 9 3 4 8 62 3 2 109 62
// 6 4 6 6 6 4 9 1 2
// 1 9 0 8 2 4 1 0 9


// output :  

// 1 2 3 4 5 7 8 9
// 2 3 4 8 9 62 109
// 1 2 4 6 9
// 0 1 2 4 8 9


