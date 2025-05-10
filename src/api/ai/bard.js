const axios = require("axios")
module.exports = function (app) {
    app.get('/ai/bard', async (req, res) => {
            try {
            const { text } = req.query;
            if (!text) {
                return res.status(400).json({ status: false, error: 'Text is required' });
            }
                const fay = await axios.get(`https://api.kenshiro.cfd/api/ai/bard?text=${text}`)
                res.status(200).json({
                    status: true,
                    result: fay.data.data
                });
            } catch (error) {
                res.status(500).send(`Error: ${error.message}`);
        }
    });
}
