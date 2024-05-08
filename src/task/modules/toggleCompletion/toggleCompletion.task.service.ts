import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';

@Injectable()
export class ToggleCompletionTaskService {
  constructor(private prismaService: PrismaService) {}

  async toggleCompletionTask(id: string) {
    const task = await this.prismaService.task.findUnique({
      where: {
        id,
      },
    });

    return this.prismaService.task.update({
      where: {
        id,
      },
      data: {
        completedAt: task.completedAt ? null : new Date(),
      },
    });
  }
}
