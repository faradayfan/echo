
const start = () => {
    const express = require('express')
    const app = express()

    const PORT = process.env.PORT || 3000

    app.get('/echo', function (req, res) {
        req.headers
        res.send({
            headers: req.headers,
            connection: {
                remoteAddress: req.socket.remoteAddress
            }
        })
    })
    const server = app.listen(PORT)

    console.log(`listening on port ${PORT}`)

    process.on("SIGTERM", () => {
        console.log("SIGTERM: closing server.")
        server.close()
        process.exit(0)
    })
    process.on("SIGINT", () => {
        console.log("SIGINT: closing server.")
        server.close()
        process.exit(0)
    })
}

start()