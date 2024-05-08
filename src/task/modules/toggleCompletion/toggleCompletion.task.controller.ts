import { Controller, Param, Patch } from '@nestjs/common';
import { ToggleCompletionTaskService } from './toggleCompletion.task.service';

@Controller('tasks')
export class ToggleCompletionTaskController {
  constructor(
    private readonly toggleCompletionTaskService: ToggleCompletionTaskService,
  ) {}

  @Patch(':id')
  async execute(@Param('id') id: string) {
    return this.toggleCompletionTaskService.toggleCompletionTask(id);
  }
}
