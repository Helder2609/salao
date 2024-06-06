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
import ProdutosController from '../app/controllers/produtos_controller.js'
import TipoProdutosController from '../app/controllers/tipo_produtos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TipoProdutosController).apiOnly()
router.resource('/Agendamentos', AgendamentosController).apiOnly()