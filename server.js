let express = require("express");
let app = express();
app.use(express.static(__dirname + "/dist/vsfc-v1"));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/dist/vsfc-v1/index.html");
})

app.listen(process.env.PORT || 4200);