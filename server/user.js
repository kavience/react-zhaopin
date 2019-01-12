const express = require('express');
const model = require('./model');
const utility = require('utility');
const Router = express.Router();

const UserModel = model.getModel('user')

// 过滤字段
const _filter = {'password': 0, '__v': 0}

// 获取指定用户信息
Router.post('/info', function (req, res) {
    const {userid} = req.cookies
    if (!userid) {
        return res.json({'code': 1, 'data': {'msg': 'cookie不存在'}})
    }

    UserModel.findOne({_id: userid}, _filter, function (err, doc) {
        if (!doc) {
            return res.json({'code': 1, 'data': {'msg': '不存在该用户', 'data': null}})
        }

        return res.json({'code': 0, 'data': {'msg': '数据获取成功', 'data': doc}})
    })
})

// 登录
Router.post('/login', function (req, res) {
    const {email, password} = req.body;

    UserModel.findOne({email, password: md5pwd(password)}, function (err, doc) {
        if (doc) {
            res.cookie('userid', doc._id);

            return res.json({'code': 0, 'data': {'msg': '登录成功', 'data': doc}})
        } else {
            return res.json({'code': 1, 'data': {'msg': '邮箱或者密码不对', 'data': null}})
        }
    })
})

// 注册
Router.post('/register', function (req, res) {
    const {email, nickname, password, confirm} = req.body;

    if (confirm !== password) {
        return res.json({'code': 1, 'data': {'msg': '两次密码输入不一致', 'data': null}})
    }
    UserModel.findOne({email}, function (err, doc) {
        if (doc) {
            return res.json({'code': 1, 'data': {'msg': '该邮箱已经注册', 'data': null}})
        } else {
            UserModel.create({email, nickname, password: md5pwd(password)}, function (err, doc) {
                if (err) {
                    return res.json({'code': 1, 'data': {'msg': '系统出现错误', 'data': null}})
                } else {
                    return res.json({'code': 0, 'data': {'msg': '注册成功', 'data': null}})
                }
            })
        }
    })

})

// 获取所有用户
Router.get('/list', function (req, res) {
    UserModel.find({}, function (err, doc) {
        return res.json({'code': 0, 'data': {'msg': '获取所有用户成功', 'data': doc}})
    })
})

// 密码加密
function md5pwd(password) {
    const salt = 'kavience';

    return utility.md5(password + salt);
}
module.exports = Router;