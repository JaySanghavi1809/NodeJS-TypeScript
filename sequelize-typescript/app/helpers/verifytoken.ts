import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export default function verifyToken (req:Request, res:Response, next:NextFunction) {
  const token:any = req.headers["x-access-token"];
  if (!token) {
    res.json({ 
      message: 'No token provided!' 
    });
  }
  const secret:any = process.env.TOKEN_SECRET;
  jwt.verify(token, secret , (err:any, decoded:any) => {
    if (err) {
      if (err.toString() === 'TokenExpiredError: jwt expired') {
        res.send({
          message: 'Unauthorized.. user login required'
        }); 
      }
      res.send({
        message: 'invalid token'
      });
    }
    delete decoded.iat;
    delete decoded.exp;
  //req.token_parse = decoded;
    return next();
  });
}

