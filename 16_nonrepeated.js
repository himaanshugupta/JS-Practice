function nonRepeat(str){
    const obj={};

    for(let i=0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]] += 1;
        }
        else{
            obj[str[i]] = 1;
        }
    }

    for (const key in obj){
        if(obj[key]==1){
            return key;
        }
    }
    return 'Not Found';
}

const str = 'GeeksForGeeks';


console.log(nonRepeat(str))