import type { NextFunction, Request, Response } from "express";

export const middleware2 = (req:Request , res:Response , next:NextFunction) =>{
    console.log("I am Middleware2")
    next();
}