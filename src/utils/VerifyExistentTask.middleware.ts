import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VerifyExistentTaskMiddleware implements NestMiddleware {
  constructor(private prismaService: PrismaService) {}

  async use({ params }: Request, res: Response, next: NextFunction) {
    const { id } = params;

    if (id) {
      const existentTask = await this.prismaService.task.findUnique({
        where: { id },
      });

      if (!existentTask) {
        throw new Error('Task not found');
      }

      next();
    } else {
      throw new Error('You should input the id for this request');
    }
  }
}
