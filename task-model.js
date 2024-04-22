const sequelize = require('../configuration1/config');
const Sequelize = require('sequelize');

const Task =sequelize.define('Task' ,{
ID: {type:Sequelize.UUID,defaultValue: Sequelize.UUIDV1, primarykey:true},
title:{type:Sequelize.STRING, allowNull:false},
description:{type:Sequelize.STRING, allowNull:false},
date:{type:Sequelize.DATEONLY, allowNull:false},
time:{type:Sequelize.DATE, allowNull:false},
priority_level:{tyoe:Sequelize.STRING, allowNull:dfalse},
category:{type:Sequelize.STRING, allowNull:false},
progress_level: {type:Sequelize.STRING, allowNull:false},
}, {freezeTableName: true});


module.exports = Task;