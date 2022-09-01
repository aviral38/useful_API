const cors = require('cors')({ origin: true })
const cheerio = require('cheerio')
const axios = require('axios')

getTeamStandings = async (req, res) => {
    try {

        const url = "https://www.formula1.com/en/teams.html"

        var teams = []
        var points = []
        var result = []
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        $('span[class="f1-color--black"]').each(function () {
            const text = $(this).text()
            console.log(text)
            teams.push(text)
        })

        $('div[class="f1-wide--s"]').each(function () {
            const text = $(this).text()
            points.push(text)
        })

        for (i = 0; i < teams.length; i++) {
            result.push({
                "team": teams[i],
                "points": points[i]
            })
        }

        res.send(JSON.stringify(result))
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = { getTeamStandings }