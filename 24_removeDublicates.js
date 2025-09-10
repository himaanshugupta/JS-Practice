function removeDuplicates(arr){
    const x = [];

    for(let i=0;i<arr.length;i++){
        if(!x.includes(arr[i])){
            x.push(arr[i]);
        }
    }
    return x;
}




console.log(removeDuplicates([5, 2, 5, 6, 6, 7]));