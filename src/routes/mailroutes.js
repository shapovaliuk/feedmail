const express = require('express')
const router = express.Router()

module.exports = function (controller) {
  router.get('/mail/preview', async (req, res) => {
    await controller.sendPreview(req, res)
  })

  router.post('/mail/send', async (req, res) => {
    await controller.sendMail(req, res)
  })

  return router
}
