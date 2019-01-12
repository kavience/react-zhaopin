const express = require('express');
const userRouter = require('./user');
const chatRouter = require('./chat');
const bodyPaser = require('body-parser');
const cookiePaser = require('cookie-parser');


const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

let arrAllSocket = [];
io.on('connection', function (socket) {
    socket.on('join', function (userid) {
        console.log(userid+'join')
        arrAllSocket[userid] = socket
    })
    // 接收某人发送的消息
    socket.on('sendmsg', function (data) {
        // 广播给其他人
        console.log(data)
        let target = arrAllSocket[data.receiveid]
        let res = {
            code: 0,
            data
        }
        if (target) {
            target.emit('receivemsg', res)
        }

    });
});



app.use(bodyPaser.json());
app.use(cookiePaser());
app.use('/user', userRouter);
app.use('/chat', chatRouter);

server.listen(9093, function () {
    console.log('express listen at port 9093')
})