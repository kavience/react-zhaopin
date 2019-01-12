const express = require('express');
const model = require('./model');
const utility = require('utility');
const Router = express.Router();

const ChatModel = model.getModel('chat')

// 此处做测试用，直接查看所有聊天记录
Router.get('/list', function (req, res) {
    ChatModel.find({}, function (err, doc) {
        return res.json({'code': 0, 'data': {'msg': '获取聊天记录成功', 'data': doc}})
    })
})

// 此处是获取某人与某人的聊天记录，需要传入两个不同的id
Router.post('/list', function (req, res) {
    const {receiveid, sendid} = req.body

    ChatModel.find().or([
        { $and: [{receiveid: receiveid, sendid: sendid}] },
        { $and: [{receiveid: sendid, sendid: receiveid}] }
    ]).exec(function (err, doc) {

        return res.json({'code': 0, 'data': {'msg': '获取聊天记录成功', 'data': doc}})
    })

})

// 聊天信息存入MongoDB中
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