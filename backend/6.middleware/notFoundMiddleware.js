const notFoundMiddleware = (req,res,next)=>{
const error = new Error(
    `Endpoint tidak di temukan: ${req.method} ${req.originalUrl}`
);
error.statusCode = 404;

next(error);
};

module.exports = notFoundMiddleware;