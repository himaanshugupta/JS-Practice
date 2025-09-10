function callback(str){
    console.log(str);
}

function main(name, callback){
    callback(`Hi ${name} function`);
}

main('Himanshu', callback);

//using Promise
const promsie = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Himanshu');
    },1000);
})

promsie.then((data) => {
    callback(`Hi ${data} promise`)
});

// async await
async function test(){
    const data = await promsie;
    callback(`Hi ${data} async await`);
}
test();