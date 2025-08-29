console.log("hello");

//TODO: Need to make cookie button interactive; one click, one cookie. Variables to add modifiers to click value, and a flat increase to cookies per second once the shop items are purchased
//TODO: loopWhile: use the loop with parameter of cookies per second to add the value of cookies per second to the total cookies, each second
// When the shop items are purchased, total cookie count goes down, CPS goes up
//shopUpgradeLogic:
// option 1
//TODO: shop items: one function (){}, but shop buttons give the function different values(cost, CPS increase)
//TODO Local storage: Make sure the values are updated after the user purchases an upgrade, or when the user clicks on the cookie

//:::::::::::::::::::::::: API FETCH :::::::::::::::::::::::::::::::::::
async function upgradeShop() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgrades = await response.json();
  return upgrades;
}
upgradeShop().then((upgrades) => {
  for (var i = 0; i < upgrades.length; i++) {
    // var shopInfo = upgrades[i];
    var shopId = upgrades[i].id;
    var shopName = upgrades[i].name;
    var shopCost = upgrades[i].cost;
    var shopIncrease = upgrades[i].increase;
    //TODO: create DOM element by ID with name, cost; make interactive and add cps to total
    const shopContainer = document.getElementById("shop-container");
    const shopElement = document.createElement("div");
    shopElement.innerHTML = `
    <h3>${shopName}</h3>
    <p>Cost: ${shopCost}</p>
    <p>Gives you ${shopIncrease} more cursi per second.
    `;
    shopContainer.appendChild(shopElement);

    // console.log(shopCost);
  }
});

//::::::::::::::::::::::::: Code from Manny :::::::::::::::::::::::::::::
//data storage
let cookieCount = 0;
let cps = 0;

let stats = {
  cookieCount: 0,
  cps: 0,
};

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//the interval
setInterval(function () {
  cookieCount += cps;
}, 1000);
//cookieCount = cookieCount + cps
// //TODO this ADDS the value of cps to total cookies each second

const shopUpgradeLogic = function(){
    getUpgradeCost = //APIcall1
    removeCurrentCookies = //cookieCount - getUpgradeCost
    getcpsIncrease = //APIcall2
    addcps = //cps + getcpsIncrease
    //local.storage.save

};

//:::::::::::::::::: Making Cursor Interactive ::::::::::::::::::::::

const largeCursorButton = document.querySelector("big-cookie")

largeCursorButton.addEventListener("click", function(){
    addCookie = cookieCount + cookiePerClickModifier,

})
