const axios = require("axios")
module.exports = function (app) {
    app.get('/search/pinterest', async (req, res) => {
            try {
                const { q } = req.query;
                if (!q) return res.status(400).json({ status: false, error: 'Query is required' });
                const fay = await axios.get(`https://api.nekorinn.my.id/search/pinterest?q=${q}`)
                res.status(200).json({
                    status: true,
                    result: fay.data.result
                });
            } catch (error) {
                res.status(500).send(`Error: ${error.message}`);
        }
    });
}