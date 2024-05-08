import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateTaskController } from './update.task.controller';
import { UpdateTaskService } from './update.task.service';

@Module({
  controllers: [UpdateTaskController],
  providers: [UpdateTaskService, PrismaService],
})
export class UpdateTaskModule {}
