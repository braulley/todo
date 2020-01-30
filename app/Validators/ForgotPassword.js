'use strict'

const Antl = use('Antl')

class ForgotPassword {
  get rules () {
    return {
      // validation rules
      email: 'required|email',
      redirect_url: 'required|url'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ForgotPassword
