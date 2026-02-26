var _a;
import { ServiceService } from './service.service.js';
import { validateBody } from '../../../middlewares/validation.middleware.js';
import { createServiceSchema, updateServiceSchema, serviceFiltersSchema, serviceParamsSchema } from './service.schema.js';
import { asyncHandler } from '../utils/asyncHandler.js';
const serviceService = new ServiceService();
export class ServiceController {
}
_a = ServiceController;
ServiceController.createService = [
    validateBody(createServiceSchema),
    asyncHandler(async (req, res) => {
        const result = await serviceService.createService({
            ...req.body,
            autoEntrepreneurId: req.AutoEntrepreneurID
        });
        res.status(201).json({
            success: true,
            data: result
        });
    })
];
ServiceController.getServices = [
    asyncHandler(async (req, res) => {
        const services = await serviceService.getServices(req.AutoEntrepreneurID, req.query);
        res.json({
            success: true,
            count: services.length,
            data: services
        });
    })
];
// Get specific service
ServiceController.getService = [
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const service = await serviceService.getServiceById(id, req.AutoEntrepreneurID);
        if (!service) {
            res.status(404).json({
                success: false,
                error: 'Service not found'
            });
            return;
        }
        res.json({
            success: true,
            data: service
        });
    })
];
ServiceController.updateService = [
    // validateBody(serviceParamsSchema),
    validateBody(updateServiceSchema),
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const service = await serviceService.updateService(id, req.AutoEntrepreneurID, req.body);
        if (!service) {
            res.status(404).json({
                success: false,
                error: 'Service not found'
            });
            return;
        }
        res.json({
            success: true,
            data: service
        });
    })
];
// ── DELETE: no validateBody — params are in req.params, not req.body ──
ServiceController.deleteService = [
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, error: 'ID is required' });
        }
        // Check service exists and belongs to this user before deleting
        const existing = await serviceService.getServiceById(id, req.AutoEntrepreneurID);
        if (!existing) {
            return res.status(404).json({ success: false, error: 'Service not found' });
        }
        const isUsed = await serviceService.checkServiceUsage(id);
        if (isUsed) {
            return res.status(400).json({
                success: false,
                error: 'Cannot delete this service as it is used in invoices or quotes'
            });
        }
        await serviceService.deleteService(id, req.AutoEntrepreneurID);
        res.status(204).send();
    })
];
export default ServiceController;
//# sourceMappingURL=service.controller.js.map