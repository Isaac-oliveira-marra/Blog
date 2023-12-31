import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'
import { AppError } from './errors/AppError'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: err.statusCode,
          message: err.message,
        });
      }
  
      return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
      });
    }
  );

app.listen(3001, () => console.log('rodando'))