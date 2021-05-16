const manufacturer = require('../models/manufacturer_repo')
const util = require('../helpers/utils');

module.exports = {
  verifyAndAuthorize: async (user_data) => {
    try {
      let user_details = Object.assign({}, user_data);
  
      let data = await manufacturer.checkUserExists(user_details.email)
      
      if (!data || !Object.keys(data).length) {
        console.log('controllers-manufacturerLogin', data);
        return {
          success: false,
          message: 'This email is not registered',
          email: user_details.email
        };
      } else {
        let result_data = await manufacturer.validate(user_details)
          
        console.log('controllers-manufacturerLogin', data);
        if (!Object.keys(result_data).length) {
          return {
            success: false,
            message: 'Authentication failed !!!!',
            email: user_details.email
          };
        } else {
          return {
            // success: true,
            id: result_data.id,
          };
        }
          //  .catch(error => {
          //   console.log(error);
          //   return error
          // });
      }
    }
    catch (err) {
      console.log(err);
      throw err;
    }
      // .then(data => {
      //   if (data.success == false || data.success) {
      //     return data;
      //   }
      //   return util.getToken(data);
      // .catch(error => {
      //   console.log(error);
      //   return error
      // });
  },

  register: async (user_data) => {
    try {
      let data = await manufacturer.checkUserExists(user_data.email)
        // .then(data => {
      if (data && data.id) {
        if (data.email === user_data.email) {
          return {
            success: false,
            email: data.email,
            message: 'This email is already registered'
          };
        }
      } else {
        await manufacturer.add(user_data)
        // .then(data => {
        return {
          id: user_data.id,
          name: user_data.name,
          email: user_data.email
        }
        // })
        // .catch(err => {
        //   throw err;
        // });
      }

    } catch(err) {
      console.log(err);
      throw err;
    }
      // })
      // .catch(error => {
      //   throw error;
      // })
  },
}