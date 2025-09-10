let str = 'GeeksForGeeks is great hbhbdbduhidhduhduhduhduhdhhd';
let arr = str.split(' ');
let long = '';

for(let i=0;i<arr.length;i++){
    if(arr[i].length>long.length){
        long = arr[i]
    }
}

console.log(long);