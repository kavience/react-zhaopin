const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/chat';

mongoose.connect(DB_URL);

// 创建两个模型 user与chat
const models = {
    user: {
        'email': {type: String, require: true},
        'nickname': {type: String, require: true},
        'password': {type: String, require: true},
        'avatar': {type: String},
        'desc': {type: String},
    },
    chat: {
        'sendid': {type: String, require: true},
        'text': {type: String, require: true},
        'receiveid': {type: String, require: true},
        'created_at': {type: Date, default: Date.now },
    }
};

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name);
    }
}