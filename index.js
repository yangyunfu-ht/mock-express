const Mock = require('mockjs')
const Express = require('express');

const app = new Express();

function generatorList(num = 1) {
  return Mock.mock({
    [`list|${num}`]: [{
      'id|+1': 1,
      title: "@ctitle(15, 26)",
      // image: "@natural(0, 15)",
      image: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8601313f4c1045bca77637cd949e58f6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp',
      reads: "@natural(0, 9999)",
      form: "@ctitle(3, 10)",
      date: "@date('yyyy-MM-dd')"
    }]
  })
}

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-headers', 'Content-Type')

  next()
})

app.get('/data', function (req, res) {
  const { num } = req.query
  return res.send(generatorList(num))
})

app.listen(4000, function () {
  console.log('本地mock服务已启动,接口地址:http://localhost:4000/data?num=请求列表数量')
})