const users = [{title1:user1},{title2:user2}]
const last_activity_time={time:new Date()}

const promise1=function updateLastUserActivity(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            last_activity_time.time = new Date()
            resolve('after user creation : '+last_activity_time.time)
        },1000)
    })
}

const promise2=function createNewUser(user){
    return new Promise((resolve,reject)=>{
        users.push({title:user})
        resolve()
    })
}
function deletePost(){
    return new Promise((res,rej)=>{
        users.pop()
        res()
    })
}

console.log('last activity time of user : '+last_activity_time.time)
Promise.all([promise1(),promise2('user1')]).then((val)=>{
    console.log(users)
    console.log(val[0])
}).then()