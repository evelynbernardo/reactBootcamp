function job1(){
    this 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("deu certo! Job1")
        }, 200)
    })
}

function job2(){
    return newPromise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("deu certo Job2")
        }, 1000)
    })
}

const promise = job1()

promise
.then(resposta => {
    return job2()
})
.then(respostaJob2 => {
    console.log('promise.console', respostaJob2)
})
.catch(error => console.log("houve erro na transação", error))