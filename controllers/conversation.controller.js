const Sequelize = require('sequelize');
const models = require('../models');

const getAll = async (req, res, next) => {
    const result = await models.Conversation.findAll();
    res.status(200).json(result);
};


module.exports = { getAll };