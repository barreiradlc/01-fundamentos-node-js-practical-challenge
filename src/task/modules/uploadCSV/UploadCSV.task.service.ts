import { Injectable } from '@nestjs/common';
import * as csv from 'csv-parser';
// import { createReadStream } from 'fs';
import { createReadStream } from 'streamifier';
import { PrismaService } from '../../../prisma.service';

@Injectable()
export class UploadCSVService {
  constructor(private prismaService: PrismaService) {}

  uploadCSV(file: any) {
    const results = [];

    createReadStream(file.buffer.toString())
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        for (const item of results) {
          await this.prismaService.task.create({ data: item });
        }
      });
  }
}
