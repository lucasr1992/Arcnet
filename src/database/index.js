const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Linha = require('../models/Linha');
const Maquina = require('../models/Maquina');
const Business = require('../models/Business');
const Dominio = require('../models/Dominio');
const Planta = require('../models/Planta');
const UnidadeOperativa = require('../models/UnidadeOperativa');


const connection = new Sequelize(dbConfig);

Linha.init(connection);
Maquina.init(connection);
Business.init(connection);
Dominio.init(connection);
Planta.init(connection);
UnidadeOperativa.init(connection);


Maquina.associate(connection.models);
Linha.associate(connection.models);


module.exports = connection;