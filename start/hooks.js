'use strict'

const {hooks} = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {

  /*
  * Strong Password Validator
   */
  const Validator = use('Validator')
  const strongPassword = (data, field, message, args, get) => {
    const value = get(data, field)
    if (!value) {
      /**
       * skip validation if value is not defined. `required` rule
       * should take care of it.
       */
      return
    }
    const strongRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    if (strongRegex.test(value)) {
      return
    } else {
      throw message
    }
  }
  Validator.extend('strongPassword', strongPassword, 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')

  /*
  * Overwrite JWT expire token
   */
  const Exception = use('Exception')
  Exception.handle('ExpiredJwtToken', async (error, {response}) => {
    return response.status(266).send('need_refresh_jwt_token')
  })

})
