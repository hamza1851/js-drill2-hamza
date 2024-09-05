const {
  interestGames,
  userInGermany,
  userWithMasterDeg,
} = require("./solutions")
const { users } = require("./users")

console.log("-------Question-1---------")
const names = interestGames(users)
console.log(names)

console.log("-------Question-2---------")

const germanUser = userInGermany(users)
for (let i = 0; i < germanUser.length; i++) {
  console.log(germanUser[i])
}

console.log("-------Question-3---------")

const userWithMasters = userWithMasterDeg(users)
for (let i = 0; i < userWithMasters.length; i++) {
  console.log(userWithMasters[i])
}
