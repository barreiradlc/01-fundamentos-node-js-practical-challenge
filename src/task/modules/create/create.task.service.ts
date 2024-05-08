import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../../prisma.service';
import { CreateTaskDTO } from './create.task.dto';

@Injectable()
export class CreateTaskService {
  constructor(private prismaService: PrismaService) {}

  createTask(taskData: CreateTaskDTO) {
    console.log(taskData);

    return this.prismaService.task.create({ data: taskData });

    return 'Hello Task!';
  }
}
