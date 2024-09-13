
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExampleService {
  constructor(private prisma: PrismaService) {}

  async createData(data: { name: string }) {
    return this.prisma.exampleModel.create({ data });
  }

  async getData(id: number) {
    return this.prisma.exampleModel.findUnique({ where: { id } });
  }

  async updateData(id: number, data: { name: string }) {
    return this.prisma.exampleModel.update({
      where: { id },
      data,
    });
  }

  async deleteData(id: number) {
    return this.prisma.exampleModel.delete({ where: { id } });
  }
}
