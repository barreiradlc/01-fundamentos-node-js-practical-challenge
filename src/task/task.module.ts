import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskModule } from './modules/create/create.task.module';

@Module({
  imports: [CreateTaskModule],
  controllers: [],
  providers: [PrismaService],
})
export class TaskModule {}
