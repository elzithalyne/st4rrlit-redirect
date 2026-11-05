const http = require("http");


const PORT = process.env.PORT || 3000;
const TWITCH_URL = "https://www.twitch.tv/st4rrlit";

const server = http.createServer((req, res) => {
    res.writeHead(302, { Location: TWITCH_URL });
    res.end();
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`ST4RRLIT redirect server running on port ${PORT}`);
});
