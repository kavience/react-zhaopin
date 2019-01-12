const express = require('express');
const model = require('./model');
const utility = require('utility');
const Router = express.Router();

const ChatModel = model.getModel('chat')

Router.get('/list', function (req, res) {
    ChatModel.find({}, function (err, doc) {
        return res.json({'code': 0, 'data': {'msg': '获取聊天记录成功', 'data': doc}})
    })
})
Router.post('/list', function (req, res) {
    const {receiveid, sendid} = req.body

    ChatModel.find().or([
        { $and: [{receiveid: receiveid, sendid: sendid}] },
        { $and: [{receiveid: sendid, sendid: receiveid}] }
    ]).exec(function (err, doc) {

        return res.json({'code': 0, 'data': {'msg': '获取聊天记录成功', 'data': doc}})
    })

})


Router.post('/creator', function (req, res) {
    const {sendid, text, receiveid} = req.body

    ChatModel.create({sendid, text, receiveid}, function (err, doc) {
        if (err) {
            return res.json({'code': 1, 'data': {'msg': '信息发送失败', 'data': null}})
        } else {
            return res.json({'code': 0, 'data': {'msg': '信息发送成功', 'data': null}})
        }
    })
})
module.exports = Router;