const users = ['user1','user2']
const last_activity_time={time:new Date()}


const createUserAndDeleteUser = async()=>{
    console.log(`last activity time : ${last_activity_time.time}`)
    console.log(users)
    const lastActivity=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            last_activity_time.time = new Date()
            resolve('after user time : '+last_activity_time.time)
        },1000)
        })
    const createUser = new Promise((resolve,reject)=>{
        users.push('user3')
        resolve('user created')
    })
    const deleteUser = new Promise((res,rej)=>{
        const user = users.pop()
        res(user)
    })
    const [afterCreationTime,userCreated] = await Promise.all([lastActivity,createUser])
    console.log(users)
    console.log(afterCreationTime)
    const [afterDeletionTime,userDeleted] = await Promise.all([lastActivity,deleteUser])
    console.log(`user deleted is ${userDeleted}`)
    console.log(afterDeletionTime)
    console.log(users)
}


createUserAndDeleteUser()
