const memoizePromise = require('memoize_promise_call').memoizePromise
console.log(memoizePromise)
const requestPromise = require('./requestPromise')
var req = memoizePromise(requestPromise)
req('http://localhost:8000/blockCertainThing').then((res)=>{
    console.log(res)
    req('http://localhost:8000/blockCertainThing').then((res)=>{
        console.log(res)
        req('http://localhost:8000/blockCertainThing').then((res)=>{
            console.log(res)
            req('http://localhost:8000/blockCertainThing').then((res)=>{
                console.log(res)
            })
        })
    })
})
