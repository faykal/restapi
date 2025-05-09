const axios = require("axios")
module.exports = function (app) {
    app.get('/search/cuaca', async (req, res) => {
            try {
                const { q } = req.query;
                if (!q) return res.status(400).json({ status: false, error: 'Query is required' });
                const fay = await axios.get(`https://api.agatz.xyz/api/cuaca?message=${q}`)
                res.status(200).json({
                    status: true,
                    result: fay.data.data
                });
            } catch (error) {
                res.status(500).send(`Error: ${error.message}`);
        }
    });
}