import jwt from 'jsonwebtoken';
const createToken = (data, secret) => {
    return jwt.sign(data, secret, { expiresIn: 60 * 60 * 30 });
};
const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};
export const JWT = {
    createToken,
    verifyToken,
};
//# sourceMappingURL=jwt.js.map