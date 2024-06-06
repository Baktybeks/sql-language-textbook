const Router = require('express')
const router = new Router()
const applicationRouter = require('./applicationRouter')
const userRouter = require('./userRouter')
const bookRouter = require('./bookRouter')
const trainingBlockRouter = require('./trainingBlockRouter')

router.use('/application', applicationRouter)
router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/training-block', trainingBlockRouter)



module.exports = router
