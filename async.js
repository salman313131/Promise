console.log('Person1:ticket')
console.log('Person2:ticket')

const preMovie = async()=>{
    const promiseWifeBringTicket = new Promise((res,rej)=>{
        setTimeout(()=>{
            res('Person3:ticket')
        },3000)
    })
    const getPopcorn = new Promise((res,rej)=>res('popcorn'))
    const getButter = new Promise((res,rej)=>res('butter'))
    const getColdDrinks = new Promise((res,rej)=>res('coldDrinks'))
    let ticket = await promiseWifeBringTicket
    console.log('wife:i have t')
    console.log('Person3:let go')
    console.log('wife:i want popcorn')
    let popCorn = await getPopcorn
    console.log(`Person3:${popCorn}`)
    console.log('wife:butter')
    let butter = await getButter
    console.log(`person3:${butter}`)
    console.log('wife:coldrinks')
    let coldDrinks = await getColdDrinks
    console.log(`Person3:${coldDrinks}`)
    return ticket
}

preMovie().then((t)=>console.log(t))

console.log('Person4:ticket')
console.log('Person5:ticket')