import jwt from 'jsonwebtoken';
export declare const JWT: {
    createToken: (data: any, secret: string) => string;
    verifyToken: (token: string, secret: string) => string | jwt.JwtPayload;
};
//# sourceMappingURL=jwt.d.ts.map