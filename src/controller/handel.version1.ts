import type { NextFunction, Request, Response } from "express";

export const handelversion1 = (req:Request, res:Response , next:NextFunction)=>{
    res.json({
        message:"I have Hit the version1"
    })
}
