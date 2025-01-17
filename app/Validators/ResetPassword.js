'use strict'


const Antl = use('Antl')

class ResetPassword {
  get rules () {
    return {
      // validation rules
      token: 'required',
      password: 'required|confirmed'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ResetPassword
