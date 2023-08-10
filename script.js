const users = ['user1','user2']
const last_activity_time={time:new Date()}
console.log(users)

const createUserAndDeleteUser = async()=>{
    console.log(`last activity time : ${last_activity_time.time}`)
    const lastActivity=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            last_activity_time.time = new Date()
            resolve('after user time : '+last_activity_time.time)
        },10000)
        })
    const createUser = (user)=>{
        return new Promise((resolve,reject)=>{
        users.push(user)
        resolve('user created')
    })}
    const [afterCreationTime,userCreated] = await Promise.all([lastActivity,createUser('user3')])
    console.log(users)
    console.log(afterCreationTime)
    const deleteUser = new Promise((res,rej)=>{
        const user = users.pop()
        res(user)
    })
    const userDeleted = await deleteUser
    console.log(`user deleted is ${userDeleted}`)
}


createUserAndDeleteUser().then(()=>{
    console.log(users)
})
