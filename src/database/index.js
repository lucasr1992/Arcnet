const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Linha = require('../models/Linha');
const Maquina = require('../models/Maquina');
const Business = require('../models/Business');
const Dominio = require('../models/Dominio');
const Planta = require('../models/Planta');
const UnidadeOperativa = require('../models/UnidadeOperativa');
const Tipo = require('../models/Tipo');
const Nivel = require('../models/Nivel');
const Area = require('../models/Area');
const Colaborador = require('../models/Colaborador');


const Teste = require('../models/Teste');


const connection = new Sequelize(dbConfig);

Linha.init(connection);
Maquina.init(connection);
Business.init(connection);
Dominio.init(connection);
Planta.init(connection);
UnidadeOperativa.init(connection);
Tipo.init(connection);
Nivel.init(connection);
Area.init(connection);
Colaborador.init(connection);

Teste.init(connection);


Maquina.associate(connection.models);
Linha.associate(connection.models);
Colaborador.associate(connection.models);



module.exports = connection;