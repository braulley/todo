'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPasswordController')
Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword')
Route.get('/files/:id', 'FileController.show')


Route.group(() => {
  Route.post('/files', 'FileController.store')

  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([
      [
        ['projects.store'],
        ['Project']
      ]
    ]))

  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([
      [
        ['projects.tasks.store'],
        ['Task']
      ]
    ]))
}).middleware(['auth'])
