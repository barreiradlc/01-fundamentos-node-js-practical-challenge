import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ListTaskController } from './list.task.controller';
import { ListTaskService } from './list.task.service';

@Module({
  imports: [],
  controllers: [ListTaskController],
  providers: [ListTaskService, PrismaService],
})
export class ListTaskModule {}
