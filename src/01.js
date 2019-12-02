const fuelFromMass = mass => Math.floor(mass / 3) - 2

const totalFuelFromMass = (mass, total = 0) => {
  const amount = fuelFromMass(mass)
  if (amount > 6) {
    return totalFuelFromMass(amount, total + amount)
  }
  return total + amount
}

// part one
const resultingFuel = input => input.reduce((agg, i) => agg + Math.floor(i / 3) - 2, 0)

// part two
const resultingTotalFuel = input => input.reduce((agg, i) => totalFuelFromMass(i) + agg, 0)
