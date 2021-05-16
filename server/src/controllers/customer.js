const customer = require('../models/customer_repo')
const util = require('../helpers/utils');

module.exports = {
  verifyAndAuthorize: async (user_data) => {
    try {
      let user_details = Object.assign({}, user_data);
  
      let data = await customer.checkUserExists(user_details.email)
      
      if (!data || !Object.keys(data).length) {
        console.log('controllers-customerLogin', data);
        return {
          success: false,
          message: 'This email is not registered',
          email: user_details.email
        };
      } else {
        let result_data = await customer.validate(user_details)
          
        console.log('controllers-customerLogin', data);
        if (!Object.keys(result_data).length) {
          return {
            success: false,
            message: 'Authentication failed !!!!',
            email: user_details.email
          };
        } else {
          return {
            id: result_data.id,
          };
        }
      }
    }
    catch (err) {
      console.log(err);
      throw err;
    }
  },

  register: async (user_data) => {
    try {
      let data = await customer.checkUserExists(user_data.email)
      if (data && data.id) {
        if (data.email === user_data.email) {
          return {
            success: false,
            email: data.email,
            message: 'This email is already registered'
          };
        }
      } else {
        await customer.add(user_data)
        return {
          id: user_data.id,
          name: user_data.name,
          email: user_data.email
        }
      }
    } catch(err) {
      console.log(err);
      throw err;
    }
  },
}