const express = require('express')
const { getTeamStandings } = require("../controllers/teams.js")
const router = express.Router()

router.get("/", getTeamStandings)
module.exports = router