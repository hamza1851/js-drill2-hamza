const { users } = require("./users.js")

function interestGames(usersObj) {
  const namesArr = Object.keys(usersObj)
  for (let i = 0; i < namesArr.length; i++) {
    const interestArr = users[namesArr[i]].interests[0]
    const myRegex = /Playing Video Games/i
    if (myRegex.test(interestArr)) {
      return namesArr[i]
    } else {
      console.log("No user like playin video games")
    }
  }
}

function userInGermany(usersObj) {
  const userNames = Object.keys(usersObj)
  const germanUser = []
  for (let i = 0; i < userNames.length; i++) {
    const nationality = usersObj[userNames[i]].nationality
    if (nationality === "Germany") germanUser.push(userNames[i])
  }
  return germanUser.length === 0 ? "No German User Found" : germanUser
}

function userWithMasterDeg(usersObj) {
  const userNames = Object.keys(usersObj)
  const userWithMasters = []
  for (let i = 0; i < userNames.length; i++) {
    if (usersObj[userNames[i]].qualification === "Masters")
      userWithMasters.push(userNames[i])
  }
  return userWithMasters.length === 0
    ? "No user has Masters Degree"
    : userWithMasters
}

module.exports = { interestGames, userInGermany, userWithMasterDeg }
