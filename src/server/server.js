const express = require('express')
const path = require('path')
const app = express()

const router = express.Router()
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'))
})
app.use(express.static(path.join(__dirname, '../../dist')))
app.use('/assets', express.static(path.join(__dirname, '../../dist/assets')))
app.use('/', router)

module.exports = app
