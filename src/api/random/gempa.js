const axios = require("axios")
module.exports = function app (app) {
app.get('/random/gempa', async (req, res) => {
    try {
        const { data } = await axios.get(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
        res.status(200).json({
            status: true,
            result: data.Infogempa.gempa
        });
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
})
};
