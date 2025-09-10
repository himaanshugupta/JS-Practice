function maxDifference(arr){
    const Maximum = Math.max(...arr);
    const Minimum = Math.min(...arr);

    return(Maximum-Minimum);
}





console.log(maxDifference([1, 2, 90, 10, 110]));