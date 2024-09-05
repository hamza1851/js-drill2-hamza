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

module.exports = { interestGames }
