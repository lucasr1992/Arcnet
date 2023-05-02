const express = require('express');
const LinhaController = require('./controllers/LinhaController');
const MaquinaController = require('./controllers/MaquinaController');
const BusinessController = require('./controllers/Business.Controller');
const DominioController = require('./controllers/DominioController');
const Planta = require('./controllers/PlantaController');
const UnidadeOperativa = require('./controllers/UnidadeOperativaController');
const TipoController = require('./controllers/TipoController');
const NivelController = require('./controllers/NivelController');
const AreaController = require('./controllers/AreaController');
const ColaboradorController = require('./controllers/ColaboradorController');


const Teste = require('./controllers/TesteController');


const routes = express.Router();

routes.get('/linhas', LinhaController.buscarTodos);
routes.post('/linhas', LinhaController.criarLinha);
routes.get('/linhas/:linha_id', LinhaController.buscarEquipamentos);

routes.post('/maquinas', MaquinaController.criarMaquina);
routes.get('/maquinas', MaquinaController.buscarTodos);
routes.get('/maquinas/:cod', MaquinaController.buscarMaquina);
routes.put('/maquinas/desativar/:id', MaquinaController.desativarMaquina);
routes.put('/maquinas/ativar/:id', MaquinaController.ativarMaquina);

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

routes.get('/tipos', TipoController.buscarTodos);
routes.post('/tipos', TipoController.criarTipo);
routes.get('/tipos/:id', TipoController.buscarTipo);

routes.get('/niveis', NivelController.buscarTodos);
routes.post('/niveis', NivelController.criarNivel);
routes.get('/niveis/:id', NivelController.buscarNivel);

routes.get('/areas', AreaController.buscarTodos);
routes.post('/areas', AreaController.criarArea);
routes.get('/areas/:id', AreaController.buscarArea);

routes.get('/colaboradores', ColaboradorController.buscarTodos);
routes.post('/colaboradores', ColaboradorController.criarColaborador);
routes.get('/colaboradores/:id', ColaboradorController.buscarColaborador);



routes.post('/teste', Teste.criarTeste);
routes.put('/teste/:id', Teste.attTeste);

module.exports= routes;