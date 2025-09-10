const arr = [0, 5, false, 6, '', 7];
const ans = [];

for(let i=0;i<arr.length;i++){
    if(arr[i]){
        ans.push(arr[i]);
    }
}

console.log(ans);