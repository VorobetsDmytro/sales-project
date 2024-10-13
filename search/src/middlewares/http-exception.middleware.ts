import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/http.exception";

export const httpExceptionMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof HttpException) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).send('Internal server error. Search API');
}
