const axios = require("axios")
module.exports = function (app) {
    app.get('/download/ytmp4', async (req, res) => {
            try {
                const { url } = req.query;
                if (!url) return res.status(400).json({ status: false, error: 'Url is required' });
                const fay = await axios.get(`https://api.vreden.my.id/api/ytmp4?url=${url}`)
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