import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { ListTaskDTO } from './list.task.dto';

@Injectable()
export class ListTaskService {
  constructor(private prismaService: PrismaService) {}

  ListTask(taskData: ListTaskDTO) {
    const { title, description } = taskData;

    return this.prismaService.task.findMany({
      where: {
        title: {
          contains: title,
        },
        description: {
          contains: description,
        },
      },
    });
  }
}
