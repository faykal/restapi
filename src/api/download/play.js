const axios = require("axios")
module.exports = function (app) {
    app.get('/download/ytplaymp3', async (req, res) => {
            try {
                const { q } = req.query;
                if (!q) return res.status(400).json({ status: false, error: 'Query is required' });
                const fay = await axios.get(`https://api.vreden.my.id/api/ytplaymp3?query=${q}`)
                res.status(200).json({
                    status: true,
                    result: {
                        metadata: fay.data.result.metadata,
                        download: fay.data.result.download
                    }
                });
            } catch (error) {
                res.status(500).send(`Error: ${error.message}`);
        }
    });
}