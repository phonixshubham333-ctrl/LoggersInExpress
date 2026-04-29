import type { NextFunction, Request, Response } from "express";

export const middleware1 =(req:Request , res:Response , next:NextFunction)=>{
      console.log("I am Middleware1")
      next();
}