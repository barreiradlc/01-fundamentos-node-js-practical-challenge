import { Body, Controller, Get } from '@nestjs/common';
import { ListTaskDTO } from './list.task.dto';
import { ListTaskService } from './list.task.service';

@Controller('tasks')
export class ListTaskController {
  constructor(private readonly listTaskService: ListTaskService) {}

  @Get()
  async execute(@Body() body: ListTaskDTO) {
    const { title, description } = body;

    return this.listTaskService.ListTask({
      title,
      description,
    });
  }
}
