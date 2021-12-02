
const adults = document.getElementById("adult")
const name = document.getElementById("name")
const startDate = document.getElementById("fromDate")
const endDate = document.getElementById("toDate")
const total = document.getElementById("price")
let fromDate = new Date()
let toDate = new Date()
console.log(startDate.value)
const paymentCalucation = () => {
    let finalAmount = 0
    let days = 1
    if(startDate.value !== "" && endDate.value !== ""){
        fromDate = new Date (startDate.value)
        toDate = new Date (endDate.value)
        const difference = Math.abs(toDate - fromDate)
        days = difference / (1000 * 3600 * 24)
    }

    finalAmount = adults.value * 1000 * days
    return finalAmount
}

name.addEventListener("keyup",()=>{
    console.log("change")
})

adults.addEventListener("keyup", (e)=> {
    adults.value = e.target.value
    total.value = paymentCalucation()
    console.log(startDate,endDate)
})

startDate.addEventListener("change",()=>{
    console.log(startDate.value)
    total.value = paymentCalucation()
})
endDate.addEventListener("change",()=>{
    console.log(endDate.value)
    total.value = paymentCalucation()
})