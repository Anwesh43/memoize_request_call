const request = require('request')
function requestPromise(url){
    const promise = new Promise((resolve,reject)=>{
        request({method:'GET',url},(err,body,response)=>{
            if(err == null) {
                resolve(response)
            }
            else {
                reject(err)
            }
        })
    })
    return promise
}
module.exports = requestPromise
