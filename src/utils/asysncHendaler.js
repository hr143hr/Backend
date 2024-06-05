import React from 'react'

const asysncHendaler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
}

export { asysncHendaler }




// cinst asysncHendaler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false
//       message: err.message
//     })
//     console.log(error);
//   }
// }