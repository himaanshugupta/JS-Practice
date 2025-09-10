let arr = [1,4,98,7,3,1,0,4];

//sort
const arr2 = arr.sort();
console.log(arr2[arr2.length-1]);

//Math.max() func
const ans = Math.max(...arr);
console.log(ans);

//reducer
const res = arr.reduce((max, curr)=>(
    curr > max ? curr : max
), arr[0]);
console.log(res);

