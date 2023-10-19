var header = document.querySelector("h1")
console.log(header)

var para = document.querySelector("p")
console.log(para)

var secondHeader = document.getElementById("header2")
console.log(secondHeader)

var secondParagraph = document.getElementById("paragraph2")
console.log(secondParagraph)

var allHeaders = document.querySelectorAll("h1")
console.log(allHeaders)

var allClassName = document.getElementsByClassName("testing")
console.log(allClassName)

var tagName = document.getElementsByTagName("h1")
console.log(tagName)

// DOM Attribute(get)
var getA = document.getElementById("get")
console.log(getA)

// var getAttributeValue = getAttribute("class")

// var upaul = document.getElementById("ford")
// console.log(ford)

// var upaulClassValue = upaul.getAttribute("class")
// console.log(upaulClassValue)

var upaul = document.getElementById("ford")

var upaulClassValue = upaul.getAttribute("class")
console.log(upaulClassValue)




// buttonOne.setAttribute("class","Joel")
// console.log(buttonOne)

// buttonTwo.setAttribute("class", "GMC")
// console.log(buttonTwo)

// buttonOne.setAttribute("disabled","")
// console.log(buttonOne)

// buttonOne.removeAttribute("disabled")
// buttonTwo.removeAttribute("disabled")

// buttonOne.style.height = "25px"
// buttonOne.style.width = "100px"
// buttonOne.style.borderRadius = "30px"
// buttonOne.style.border = "none"
// buttonOne.style.backgroundColor = "tomato"

// creating a new h1 element
var newDiv = document.createElement("h1")

// creating a new text node
var newText = document.createTextNode("hello how are you ding")

// adding the text node to the newly created div
newDiv.appendChild(newText)

// adding the newly created element and it contents into the dom
// var currentDiv = document.getElementById("body")
// document.body.appendChild(newDiv, currentDiv)

// var GMC= document.getElementById("main")
// console.log(GMC)


// var mother = document.getElementById("main")
// var stubbornChild = document.getElementById("hint")

// var buttonOne = document.getElementById("btn")
// var buttonTwo = document.getElementById("btn2")
// function greet() {
//     alert("hello my fellow coder")
//     console.log("hello my fellow developer")
// }
// function greet2() {
//     alert("hello oga u no hear me")
//     console.log("hello oga u no hear me")
// }
// buttonOne.onclick = greet
// buttonTwo.addEventListener("click", greet2)

// function click() {
//     return console.log("i have been clicked ones")
// }

// function click2() {
//     return console.log("i have been clicked twice")
// }

// var click = document.getElementById(mybtn)
// var click2


function validateForm(e) {
    e.preventDefault()

    var fullName = document.loginForm.fullName.value
    var mail = document.loginForm.mail.value
    var phone = document.loginForm.phone.value
    var dob = document.loginForm.dob.value
    var age = document.loginForm.age.value
    var pswrd = document.loginForm.pswrd.value

    if (name.length <=4){
        return alert("full name should be more than four character")
    }
    if (mail.length <=0){
        return alert("mail is required")
    }
    if (phone.length <=0){
        return alert("phone is required")
    }
    if (dob.length <=0){
        return alert("date of birth is required")
    }

}



// function ageChecker2(age) {
//     if (age < 18) {
//         return "you are not legible to vote"
//     }else if (age >=18 && age <= 35) {
//         return "your future is in your hand"
//     }else if (age >= 35 && age <= 50) {
//         return "please dont implicate us"
//     }else {
//         return "citizens should not come out and vote"
//     }
// }

// console.log(ageChecker2(17))
// console.log(ageChecker2(34))
// console.log(ageChecker2(36))
// console.log(ageChecker2(56))

// function ageChecker4(age) {
//     (age<18) ? console.log("you are not eligible to vote"): console.log("you are eligible to vote")
// }
// console.log(ageChecker4(17))


// function sellTicket(age) {
//     (age<6) ? console.log("ticket is 500"): console.log("ticket is 1000")
// }
// console.log(sellTicket(5))
// console.log(sellTicket(16))


// function ageChecker5(age) {
//     (age<6) ? console.log ("ticket is 500"): 
//     (age>=6 && age<=17) ? console.log("ticket is 1000"): 
//     (age>=18 && age <=30) ? console.log("ticket is 2000"): 
//     (age>=31 && age <=45) ? console.log("ticket is 5000"):
//     console.log("ticket is 10000")


// console.log(ageChecker5(5))
// console.log(ageChecker5(7))
// console.log(ageChecker5(19))
// console.log(ageChecker5(34))


// var firstName = "Joel"
// var lastName = "Bamigbade"
// var dob = 1988

// console.log(dob)
// dob =1988
// console.log(dob)
// dob = 1989
// console.log(dob)
// var dob = 1989
// console.log(dob)

// let firstName = "Joel"
// let lastName = "Bamigbade"
// let dob = 1988
// dob = 1989
// console.log(dob)
// var dob = 1989
// console.log(dob)

// var firstName = "Joel"
// var lasrName = "Bamigbade"
// var dob = 1989

// console.log(dob)

// var dob = 1999
// console.log(dob)

// const diw = 7;
// console.log(diw)

// diw = 9
// console.log(diw)
// const diw = 14
// console.log(diw)

// const fullName = `Joel Bamigbade`;
// const school = `GMC`;
// const course = `Full Stack web developer`;
// const instructor = `Lee`;
// const sentence = `My name is ${fullNmae}, I attend ${school}, I am currently studying ${course}, my instructor name is ${instructor}. `

// const sentence2 = "My name is" + fullName + ", I attend " + school + ", I am currently studying " + course + ", my instructor name is " + instructor + "."
// console.log(sentence2)

// function ageChecker(age) {
//     (age < 18) ? console.log("you are not legible to vote"): console.log("you are legible to vote")
// }
// ageChecker(18)
// ageChecker(25)d     

// const pprofit = (cp, sp) => {
//     let profit = sp - cpreturn 
//     return (profit/cp) *100
// }

// pprofit(4000, 9000)
// console.log(profit(4000, 9000))

// const nairaCon = (naira) => {
//     let naira = n*777
//     return naira
// }

// nairaCon(500)
// console.log(nairaCon(500))
