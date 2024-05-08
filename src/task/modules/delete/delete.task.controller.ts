import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteTaskService } from './delete.task.service';

@Controller('tasks')
export class DeleteTaskController {
  constructor(private readonly deleteTaskService: DeleteTaskService) {}

  @Delete(':id')
  async execute(@Param('id') id: string) {
    return this.deleteTaskService.DeleteTask(id);
  }
}
