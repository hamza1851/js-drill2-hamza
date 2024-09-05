const { interestGames } = require("./solutions")
const { users } = require("./users")

const names = interestGames(users)
console.log(names)
