import type { HttpContext } from '@adonisjs/core/http'
import TipoProduto from '../models/tipo_produto.js'

export default class TipoProdutosController {

    async index({request}: HttpContext){
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await TipoProduto.query().preload('produto').paginate(page, perPage)
    }

    async store({request}: HttpContext){
        const dados = request.only(['nome'])
        return await TipoProduto.create(dados)
    }

    async show({params}: HttpContext){
        return await TipoProduto.findOrFail(params.id)
    }

    async update({params, request}: HttpContext){

        const tipo = await TipoProduto.findOrFail(params.id)
        const dados = request.only(['nome'])

        tipo.merge(dados)
        return await tipo.save()
    }

    async destroy({params}: HttpContext){
        const tipo = await TipoProduto.findOrFail(params.id)
        
        await tipo.delete()
        return {msg: 'Registro deletado com sucesso', tipo}
    }
}