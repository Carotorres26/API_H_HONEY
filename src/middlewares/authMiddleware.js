const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(403).json({ message: "No autorizado" });
    next();
};

export default authMiddleware;
