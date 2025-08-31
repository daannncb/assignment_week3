//:::::::::::::::::::::::: API FETCH :::::::::::::::::::::::::::::::::::
async function upgradeShop() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const upgrades = await response.json();
  return upgrades;
}

//:::::::::::::::::::::::: SHOP FUNCTION :::::::::::::::::::::::::::::::
upgradeShop().then((upgrades) => {
  for (var i = 0; i < upgrades.length; i++) {
    let shopName = upgrades[i].name;
    let shopCost = upgrades[i].cost;
    let shopIncrease = upgrades[i].increase;
    const shopContainer = document.getElementById("shop-container");
    const shopElement = document.createElement("div");
    shopElement.className = "shop-item";
    shopElement.innerHTML = `<h3>${shopName}</h3>
    <p>Cost: ${shopCost}</p>
    <p>Bake ${shopIncrease} more cookies per second.</p>
    `;
    const buyButton = document.createElement("button");
    buyButton.className = "shop-button";
    buyButton.textContent = `Buy 1 ${shopName}`;

    buyButton.addEventListener("click", () => {
      purchaseUpgrade(upgrades[i]);
      console.log(`${shopName} button clicked!`);
    });

    function purchaseUpgrade() {
      if (cookieCount >= shopCost) {
        cookieCount -= shopCost;
        cps += shopIncrease;
        updateDisplay();
        saveGame();
      } else {
        console.log("not enough cookies");
      }
    }

    shopElement.appendChild(buyButton);

    shopContainer.appendChild(shopElement);
  }
});

//:::::::::::::::::::::::: BIG COOKIE & COOKIE TRACKING ::::::::::::::::
let cookieCount = 0;
let cps = 0;
setInterval(function () {
  cookieCount += cps;
  updateDisplay();
}, 1000);
const cookieCountElement = document.getElementById("cookie-count");
const cpsElement = document.getElementById("cps");
const bigCookie = document.getElementById("big-cookie");

function updateDisplay() {
  cookieCountElement.textContent = cookieCount;
  cpsElement.textContent = cps;
}

bigCookie.addEventListener("click", function () {
  cookieCount++;
  console.log(cookieCount);
  updateDisplay();
});

setInterval(saveGame, 300000); //I wanted to implement a save on a timer, but it broke the shop item purchase timer because I had saveGame(), not saveGame

function saveGame() {
  const saveState = {
    cookieCount: cookieCount,
    cps: cps,
  };
  localStorage.setItem("cookieClickerSavestate", JSON.stringify(saveState));
  console.log("Progress Saved");
}

function loadGame() {
  const saveData = localStorage.getItem("cookieClickerSavestate");
  if (saveData) {
    const saveState = JSON.parse(saveData);
    cookieCount = saveState.cookieCount || 0;
    cps = saveState.cps || 0;
    updateDisplay();
    console.log("Game loaded:", saveState);
  }
}

loadGame();
