import { Router } from 'express'
import { DevisController } from './quote.controller.js'
import { validateBody } from '../../middlewares/validation.middleware.js'
import { createQuoteSchema, updateQuoteSchema } from './quote.schema.js'
import { isAthenticated } from '../../middlewares/auth.middelware.js'

const router = Router()
const controller = new DevisController()

router.use(isAthenticated)

router.post('/quote',controller.create)
router.get('/quote', controller.getAll)
router.get('/quote/:id', controller.getById)
router.patch('/quote/:id',  controller.update)
router.delete('/quote/:id', controller.delete)

router.post('/quote/:id/envoyer', controller.envoyer)
router.post('/quote/:id/accepter', controller.accepter)
router.post('/quote/:id/refuser', controller.refuser)
router.post('/quote/:id/expire', controller.expire)

router.post('/quote/:id/convertir-facture', controller.convertirEnFacture)

export default router
