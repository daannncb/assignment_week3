console.log("hello");


//TODO: Need to make cookie button interactive; one click, one cookie. Variables to add modifiers to click value, and a flat increase to cookies per second once the shop items are purchased

//TODO: loopWhile: use the loop with parameter of cookies per second to add the value of cookies per second to the total cookies, each second

// When the shop items are purchased, total cookie count goes down, CPS goes up

var totalCookies

var cookiesPerSecond

const shop1Cost

const shop2Cost

//shopUpgradeLogic:

// option 1


//TODO: shop items: one function (){}, but shop buttons give the function different values(cost, CPS increase)

//TODO Local storage: Make sure the values are updated after the user purchases an upgrade, or when the user clicks on the cookie

//::::::::::::::::::::::::: Code from Manny :::::::::::::::::::::::::::::

//data storage
let cookieCount = 0;
let cps = 0;

let stats = {
cookieCount: 0,
cps: 0,
}



//::::::::::::::::::::::: Shop Upgrades :::::::::::::::::::::::::::

//::::use a loop

//create DOM element
//assign value
//append to DOM
//should see upgrades on page

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//the interval

setInterval(function(){
cookieCount += cps; //cookieCount = cookieCount + cps
//TODO this ADDS the value of cps to total cookies each second

,1000);