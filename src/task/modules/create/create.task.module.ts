import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskController } from './create.task.controller';
import { CreateTaskService } from './create.task.service';

@Module({
  imports: [],
  controllers: [CreateTaskController],
  providers: [CreateTaskService, PrismaService],
})
export class CreateTaskModule {}
