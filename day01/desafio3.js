function job(data) {
    return new Promise(function(resolve, reject){
        if (typeof(data) != "number"){
            reject('error');
        }
        else if (data % 2 == 1){
            resolve('odd');
        }

        else if (data % 2 ==0){
            setTimeout(() =>{
                resolve('even');
            }, 2000)
        }
    });
}
  
job(54)
.then(console.log)
.catch(console.log)