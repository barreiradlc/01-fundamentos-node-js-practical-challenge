import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class VerifyBodyMiddleware implements NestMiddleware {
  async use({ body }: Request, res: Response, next: NextFunction) {
    const { title, description } = body;

    if (title && description) {
      next();
    } else {
      throw new Error('You should input title and descrition');
    }
  }
}
