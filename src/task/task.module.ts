import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskModule } from './modules/create/create.task.module';
import { ListTaskModule } from './modules/list/list.task.module';
import { UpdateTaskModule } from './modules/update/update.task.module';

@Module({
  imports: [CreateTaskModule, ListTaskModule, UpdateTaskModule],
  controllers: [],
  providers: [PrismaService],
})
export class TaskModule {}
