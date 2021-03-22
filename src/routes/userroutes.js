const express = require('express')
const router = express.Router()

module.exports = function (controller) {
  router.post('/user', async (req, res) => {
    await controller.add(req, res)
  })

  router.delete('/user', async (req, res) => {
    await controller.remove(req, res)
  })

  router.get('/user', async (req, res) => {
    await controller.find(req, res)
  })

  return router
}
