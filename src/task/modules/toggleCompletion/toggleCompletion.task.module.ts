import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ToggleCompletionTaskController } from './toggleCompletion.task.controller';
import { ToggleCompletionTaskService } from './toggleCompletion.task.service';

@Module({
  controllers: [ToggleCompletionTaskController],
  providers: [ToggleCompletionTaskService, PrismaService],
})
export class ToggleCompletionTaskModule {}
