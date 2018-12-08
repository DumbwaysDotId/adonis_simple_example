'use strict'
const Category = use('App/Models/Category')

class CategoryController {

    async index(){
        return await Category.all()
    }

    async store({request, response}){
        // const title = request.input('title')
        // const description = request.input('description')

        const body = request.all()        

        const data = await Category.create({
            ...body,
            status: 1
        })

        response.send({
            message: "success",
            data
        })
    }

}

module.exports = CategoryController
