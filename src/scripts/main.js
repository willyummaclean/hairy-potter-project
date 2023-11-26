// Imports go first

import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./kiln.js"

// Make 5 pieces of pottery at the wheel
const coffeeMug = makePottery("mug", 5, 3)
const gravyPlate = makePottery("plate", 3, 1)
const flowerPot = makePottery("vase", 4, 7 )
const soupDish = makePottery("dish", 2, 4)
const juiceCup = makePottery("cup", 6, 3)
firePottery(coffeeMug, 2300)
firePottery(gravyPlate, 1500)
console.log(coffeeMug, gravyPlate)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



