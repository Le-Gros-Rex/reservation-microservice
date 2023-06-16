import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
    token = token.slice(7); // Remove 'Bearer ' from token
    return jwt.verify(token, process.env.JWT_SECRET);
};

