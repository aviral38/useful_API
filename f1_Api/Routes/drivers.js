const express = require('express')
const router = express.Router()
const { getDriverStandings } = require("../controllers/driver.js")
router.get("/", getDriverStandings)


module.exports = router