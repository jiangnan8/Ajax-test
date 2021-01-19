const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('Hello express 2021!')
})

app.listen(8000, () => {
    console.log('服务器已启动！');
})