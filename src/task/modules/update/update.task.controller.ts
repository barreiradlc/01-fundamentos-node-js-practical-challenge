import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateTaskControllerDTO } from './update.task.dto';
import { UpdateTaskService } from './update.task.service';

@Controller('tasks')
export class UpdateTaskController {
  constructor(private readonly updateTaskService: UpdateTaskService) {}

  @Put(':id')
  async execute(
    @Param('id') id: string,
    @Body() body: UpdateTaskControllerDTO,
  ) {
    const { title, description } = body;

    return this.updateTaskService.updateTask({
      id,
      title,
      description,
    });
  }
}
