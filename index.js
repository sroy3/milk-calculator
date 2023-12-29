const MAX_MILK_AMOUNT_OZ = [26, 30, 30, 33, 33, 33, 28, 28, 28, 28, 28, 28]
const MAX_MILK_AMOUT_ML = [800, 900, 900, 1000, 1000, 1000, 850, 850, 850, 850, 850, 850]

const ARGUMENTS = {
  childBirthDate: new Date('12/29/2023'), // Your child's birthdate
  plannedEndDataForBreastMilk: new Date('12/29/2024'),  // When you plan to stop feeding your child breast milk
  dailySurplus: 24, // How much surplus do you store everyday
  storedSurplus: 300, // How much surplus do you have stored already
  useMls: false // Use ml instead of oz
}

const calcEndOfPumping = (args) => {
  const {childBirthDate, plannedEndDataForBreastMilk, useMls, storedSurplus, dailySurplus} = args

  const maxMilkAmout = useMls ? MAX_MILK_AMOUT_ML : MAX_MILK_AMOUNT_OZ
  const getDailyAmoutOfMilk = (datePointer) => {
    const childMonthAge = Math.floor((datePointer - childBirthDate) / 1000 / 60 / 60 / 24 / 30)
    const maxMilkAmountIdx = childMonthAge > 12 ? 11 : childMonthAge - 1
    return maxMilkAmout[maxMilkAmountIdx]
  }

  const today = new Date()
  const daysLeft = Math.floor((plannedEndDataForBreastMilk - today) / 1000 / 60 / 60 / 24)

  let childTotalAmout = 0
  let totalSurplus = storedSurplus

  const datePointer = new Date()


  while (datePointer < plannedEndDataForBreastMilk) {
    const dailyAmountOfMilk = getDailyAmoutOfMilk(datePointer)

    childTotalAmout += dailyAmountOfMilk
    totalSurplus += dailySurplus

    datePointer.setDate(datePointer.getDate() + 1)
  }

  while (datePointer > today) {
    const dailyAmountOfMilk = getDailyAmoutOfMilk(datePointer)

    totalSurplus = totalSurplus - dailyAmountOfMilk

    if (totalSurplus < 0) {
      break
    }

    totalSurplus -= dailySurplus

    datePointer.setDate(datePointer.getDate() - 1)
  }

  return datePointer
}

const endOfPumpingDate = calcEndOfPumping(ARGUMENTS)

console.log(endOfPumpingDate.toLocaleString())
