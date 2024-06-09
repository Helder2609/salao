/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import AgendamentosController from '../app/controllers/agendamentos_controller.js'
import CargosController from '../app/controllers/cargos_controller.js'
import ClientesController from '../app/controllers/clientes_controller.js'
import FormaPagamentosController from '../app/controllers/forma_pagamentos_controller.js'
import FuncionariosController from '../app/controllers/funcionarios_controller.js'
import ProdutosController from '../app/controllers/produtos_controller.js'
import TipoProdutosController from '../app/controllers/tipo_produtos_controller.js'
import ServicosController from '../app/controllers/servicos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TipoProdutosController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/agendamentos', AgendamentosController).apiOnly()
router.resource('/cargos', CargosController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/FormaPagamento', FormaPagamentosController).apiOnly()
router.resource('/servicos', ServicosController).apiOnly()
