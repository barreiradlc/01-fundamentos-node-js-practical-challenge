import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';

@Injectable()
export class DeleteTaskService {
  constructor(private prismaService: PrismaService) {}

  DeleteTask(id: string) {
    return this.prismaService.task.delete({
      where: {
        id,
      },
    });
  }
}
