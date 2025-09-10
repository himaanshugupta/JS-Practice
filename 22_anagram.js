function areAnagrams(x,y){
    let flag = false;

    x = x.split('').sort().join('');
    y = y.split('').sort().join('');

    console.log(x,y)

    if(x===y){flag=true}

    return flag
}



console.log(areAnagrams("listen", "silnet"));