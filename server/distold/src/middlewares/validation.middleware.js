export const validateBody = (schema) => async (req, res, next) => {
    try {
        await schema.body.parse(req.body);
        // await schema.query.parse(req.query);
        next();
    }
    catch (error) {
        return res.status(200).json({
            message: "Validation error " + error.message,
            statusCode: 400,
        });
    }
};
export const validateQuery = (schema) => async (req, res, next) => {
    try {
        await schema.query.parse(req.query);
        next();
    }
    catch (error) {
        return res.status(400).json({
            message: "Validation error",
            errors: error.message,
        });
    }
};
//# sourceMappingURL=validation.middleware.js.map