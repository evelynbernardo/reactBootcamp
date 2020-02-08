function job(callback1, callback2) {
    setTimeout(function(){
        callback1('callback1');
    }, 2000);
    
    setTimeout(function(){
        callback2('callback2');
    }, 1000);
    
    setTimeout(function(){
        callback2('callback2');
    }, 2000);
    
    setTimeout(function(){
        callback2('callback2');
    }, 3000);

}

module.exports = job;