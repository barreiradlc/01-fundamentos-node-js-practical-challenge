import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadCSVService } from './UploadCSV.task.service';

@Controller('tasks')
export class UploadCSVController {
  constructor(private readonly uploadCSVService: UploadCSVService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async execute(@UploadedFile() file: Express.Multer.File) {
    console.log(typeof file);

    return this.uploadCSVService.uploadCSV(file);
  }
}
