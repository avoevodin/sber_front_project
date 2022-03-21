const { db } = require('../DB')

const getPosts = (req, res) => {
  const dataForClient = db.posts
  res.json(dataForClient)
}

module.exports = {
  getPosts,
}
