import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { DeleteTaskController } from './delete.task.controller';
import { DeleteTaskService } from './delete.task.service';

@Module({
  controllers: [DeleteTaskController],
  providers: [DeleteTaskService, PrismaService],
})
export class DeleteTaskModule {}
