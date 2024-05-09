import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UploadCSVService } from './UploadCSV.task.service';
import { UploadCSVController } from './uploadCSV.task.controller';

@Module({
  controllers: [UploadCSVController],
  providers: [UploadCSVService, PrismaService],
})
export class UploadCSVModule {}
