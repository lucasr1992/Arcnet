const express = require('express');
const LinhaController = require('./controllers/LinhaController');
const MaquinaController = require('./controllers/MaquinaController');
const BusinessController = require('./controllers/Business.Controller');
const DominioController = require('./controllers/DominioController');
const Planta = require('./controllers/PlantaController');
const UnidadeOperativa = require('./controllers/UnidadeOperativaController');


const routes = express.Router();

routes.get('/linhas', LinhaController.buscarTodos);
routes.post('/linhas', LinhaController.criarLinha);
routes.get('/linhas/:linha_id', LinhaController.buscarEquipamentos);

routes.post('/maquinas', MaquinaController.criarMaquina);
routes.get('/maquinas', MaquinaController.buscarTodos);
routes.get('/maquinas/:cod', MaquinaController.buscarMaquina);

routes.get('/business', BusinessController.buscarTodos);
routes.post('/business', BusinessController.criarBusiness);
routes.get('/business/:cod', BusinessController.buscarBusiness);

routes.get('/dominios', DominioController.buscarTodos);
routes.post('/dominios', DominioController.criarDominio);
routes.get('/dominios/:id', DominioController.buscarDominio);

routes.get('/plantas', Planta.buscarTodos);
routes.post('/plantas', Planta.criarPlanta);
routes.get('/plantas/:id', Planta.buscarPlanta);

routes.get('/unidades', UnidadeOperativa.buscarTodos);
routes.post('/unidades', UnidadeOperativa.criarUnidadeOperativa);
routes.get('/unidades/:id', UnidadeOperativa.buscarUnidadeOperativa);



module.exports= routes;