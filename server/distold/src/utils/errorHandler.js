export class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export const errorHandler = (err, req, res, next) => {
    console.log(err.message);
    const statusCode = err.statusCode || 500;
    if (statusCode === 500)
        err.message = "Something Went wrong!";
    res.status(200).json({
        message: err.message,
        statusCode: statusCode
    });
    next();
};
//# sourceMappingURL=errorHandler.js.map