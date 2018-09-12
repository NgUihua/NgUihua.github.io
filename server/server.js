const express = require('express')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server.entry')

const app = express()

console.log(serverEntry)

//接受任何请求返回服务端渲染的代码
app.get('*', function (req, res) {
  // const appString = ReactSSR.renderToString(serverEntry)
  // res.send(appString)
})

app.listen(3030, function () {
  console.log('server is listening on 3030')
})