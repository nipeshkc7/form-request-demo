const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/pictures', (req, res) => {
    return res.json([
        "https://res.cloudinary.com/fidohuncloud/image/upload/v1642794180/eyrfrf8orusaz2bnq7pj.jpg",
        "https://res.cloudinary.com/fidohuncloud/image/upload/v1642795673/rrqsddzbjwtfkrm1vbco.jpg"
    ]);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})