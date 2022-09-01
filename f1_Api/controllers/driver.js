const cors = require('cors')({ origin: true })
const cheerio = require('cheerio')
const axios = require('axios')


const url = "https://www.formula1.com/en/drivers.html"

const getDriverStandings = async (req, res) => {
    try {
        var firstName = []
        var lastName = []
        var points = []
        var result = []
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        $('span[class="d-block f1--xxs f1-color--carbonBlack"]').each(function () {
            const text = $(this).text()
            firstName.push(text)
        })

        $('span[class="d-block f1-bold--s f1-color--carbonBlack"]').each(function () {
            const text = $(this).text()
            lastName.push(text)
        })

        $('div[class="f1-wide--s"]').each(function () {
            const text = $(this).text()
            points.push(text)
        })
        //console.log(Array.from(points))
        //console.log(drivers)
        //console.log(points)
        for (i = 0; i < firstName.length; i++) {
            result.push({
                "driver": firstName[i] + " " + lastName[i],
                "points": points[i]
            })
        }
        res.send(JSON.stringify(result))

    }
    catch (error) {
        console.error(error)
    }

}
module.exports = { getDriverStandings }