import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { UpdateTaskDTO } from './update.task.dto';

@Injectable()
export class UpdateTaskService {
  constructor(private prismaService: PrismaService) {}

  updateTask(taskData: UpdateTaskDTO) {
    const { id, title, description } = taskData;

    const data = {
      title,
      description,
    };

    !data.title && delete data.title;
    !data.description && delete data.description;

    return this.prismaService.task.update({
      where: {
        id,
      },
      data,
    });
  }
}
