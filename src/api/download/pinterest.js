const axios = require("axios")
module.exports = function (app) {
    app.get('/download/pinterest', async (req, res) => {
            try {
                const { url } = req.query;
                if (!url) return res.status(400).json({ status: false, error: 'Url is required' });
                const fay = await axios.get(`https://api.agatz.xyz/api/pinterest?url=${url}`)
                res.status(200).json({
                    status: true,
                    result: fay.data.data
                });
            } catch (error) {
                res.status(500).send(`Error: ${error.message}`);
        }
    });
}