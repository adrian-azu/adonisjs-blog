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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.get('/posts', 'PostController.index')
Route.get('/posts/create', 'PostController.create').as('create')
Route.get('/posts/edit/:id', 'PostController.edit').as('editPost')
Route.get('/posts/:id', 'PostController.show')
Route.post('/posts/store', 'PostController.store').as('postStore')
Route.put('/posts/:id', 'PostController.update').as('updatePost')
Route.delete('/posts/:id', 'PostController.destroy')
// Route.get('/test', ()=>'hello world')

// Route.get('/test/:id', ({params})=>`hello ${params.id}`)
