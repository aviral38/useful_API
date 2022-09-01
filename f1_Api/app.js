const express = require('express')
const app = express()
const driverRoutes = require("./Routes/drivers.js")
const teamRoutes = require("./Routes/teams.js")
app.use('/drivers', driverRoutes)
app.use('/teams', teamRoutes)
app.get('/', (req, res) => {
    res.send("Hi! This is F1 Api <br/> Use {url/drivers} to get F1 drivers standings <br/> Use {url/teams} to get F1 team Standings");
})
app.listen(8000, () => {
    console.log('server started')
})