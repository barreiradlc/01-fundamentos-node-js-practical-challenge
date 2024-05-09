import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskModule } from './modules/create/create.task.module';
import { DeleteTaskModule } from './modules/delete/delete.task.module';
import { ListTaskModule } from './modules/list/list.task.module';
import { ToggleCompletionTaskModule } from './modules/toggleCompletion/toggleCompletion.task.module';
import { UpdateTaskModule } from './modules/update/update.task.module';
import { UploadCSVModule } from './modules/uploadCSV/UploadCSV.task.module';

@Module({
  imports: [
    CreateTaskModule,
    ListTaskModule,
    UpdateTaskModule,
    DeleteTaskModule,
    ToggleCompletionTaskModule,
    UploadCSVModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class TaskModule {}
