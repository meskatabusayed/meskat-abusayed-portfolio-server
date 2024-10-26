/* eslint-disable no-unused-vars */
import {  Request, Response } from "express";
import httpStatus from "http-status";

export const NotFound = (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  });
};
