const axios = require("axios")
module.exports = function app (app) {
app.get('/random/quotesanime', async (req, res) => {
    try {
        const { data } = await axios.get(`https://api.kenshiro.cfd/api/random/quotesanime`)
        res.status(200).json({
            status: true,
            result: data.data
        });
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
})
};
