let arr = [[1,2,3,4],
           [5,6,7,8],
           [9,10,11,12]];
let arr1 = [];
function change(arr){
    
    for(let i=0; i < arr[0].length;i++){
           //  console.log(arr[i]);
        for(let j=0;j<arr[0].length-1;j++){  
           if(i== 0 && j<= arr[0].length-1)
            arr1.push(arr[j][i]);
            else if( i==1 && j<= arr[0].length-1){
                arr1.push(arr[j][i]);
            }
            else if( i==2 && j<= arr[0].length-1){
                arr1.push(arr[j][i]);
            }
        }
    }


    console.log(arr1);
}

change(arr);


