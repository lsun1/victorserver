const http = require('http')

const server = http.createServer(function (req, res) {

    console.log(req.url)
    console.log(req.headers)
    console.log(req.method)

    let type = req.headers['type']
    let first = req.headers['a']
    let second = req.headers['b']

    let response1
    if (type === 'add') {
        response1 = Number(first) + Number(second)
    } else if (type == 'minus'){
        response1 = Number(first) - Number(second)
    } else if (type == 'multiplication'){
        response1 = Number(first) * Number(second)
    } else if (type == 'divide'){
        response1 = Number(first) / Number(second)
    }

    console.log(type, first, second)

  res.write(String(response1)); //write a response to the client
  res.end(); //end the response
})


server.listen(3001)