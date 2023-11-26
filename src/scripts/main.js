// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
const coffeeMug = makePottery("mug", 5, 3)
const gravyPlate = makePottery("plate", 3, 1)
const flowerPot = makePottery("vase", 4, 7 )
const soupDish = makePottery("dish", 2, 4)
const juiceCup = makePottery("cup", 6, 3)

// Fire each piece of pottery in the kiln

firePottery(coffeeMug, 2300)
firePottery(gravyPlate, 1500)
firePottery(flowerPot, 1600)
firePottery(soupDish, 2000)
firePottery(juiceCup, 2400)
// Determine which ones should be sold, and their price
toSellOrNotToSell(coffeeMug)
toSellOrNotToSell(gravyPlate)
toSellOrNotToSell(flowerPot)
toSellOrNotToSell(soupDish)
toSellOrNotToSell(juiceCup)

console.log(usePottery())
// Invoke the component function that renders the HTML list



