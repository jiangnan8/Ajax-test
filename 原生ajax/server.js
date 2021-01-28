const express = require('express')

const app = express()

app.post('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体
    response.send('Hello ajax 2021!')
})

app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello ajax POST')
})
// 配合修改  设置自定义头  方法为all ; Access-Control-Allow-Header
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        name: 'jn',
        age: 18
    }
    let str = JSON.stringify(data)
    response.send(data)
})

app.listen(8000, () => {
    console.log('服务器808已启动……');
})