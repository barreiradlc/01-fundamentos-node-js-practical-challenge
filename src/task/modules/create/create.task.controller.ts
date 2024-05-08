import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDTO } from './create.task.dto';
import { CreateTaskService } from './create.task.service';

@Controller('tasks')
export class CreateTaskController {
  constructor(private readonly createTaskService: CreateTaskService) {}

  @Post()
  async execute(@Body() body: CreateTaskDTO) {
    const { title, description } = body;

    return this.createTaskService.createTask({
      title,
      description,
    });
  }
}
