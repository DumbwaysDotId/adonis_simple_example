'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Database = use('Database')
const Category = use('App/Models/Category')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Route.get('/categories', () => {
//   // return Database.select('*').from('categories')
//   return Category.all()
// })

Route.get('/categories', 'CategoryController.index')
Route.post('/category', 'CategoryController.store')