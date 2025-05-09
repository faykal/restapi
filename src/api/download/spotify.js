const axios = require('axios');

async function spotify(url) {
    //metadata
    let metadata = {
        status: 500,
        success: false,
        result: {}
    };

    try {
        const regex = /^https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9]+)(?:\?.*)?$/;
        if (!url.match(regex)) throw '⚠️ Maaf Link Spotify';

        //metadata result
        metadata.status = 200;
        metadata.success = true;
        metadata.result = (await axios.post('https://node-spotify-downloader-backend-production.up.railway.app/download', {
            spotify_url: url
        })).data.data;

        return metadata;
    } catch (e) {
        metadata.result.msg = e;
        throw metadata;
        console.error(metadata);
    }
};

module.exports = function (app) {
app.get('/download/spotify', async (req, res) => {
        try {      
            const { url } = req.query;
            if (!url) {
                return res.status(400).json({ status: false, error: 'Url is required' });
            }
            const results = await spotify(url);
            res.status(200).json({
                status: true,
                result: results.result
            });
        } catch (error) {
            res.status(500).send(`Error: ${error.message}`);
        }
});
}