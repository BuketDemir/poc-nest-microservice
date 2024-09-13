
import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  async createExample(@Body() body: { name: string }) {
    return this.exampleService.createData(body);
  }

  @Get(':id')
  async getExample(@Param('id') id: number) {
    return this.exampleService.getData(id);
  }

  @Put(':id')
  async updateExample(@Param('id') id: number, @Body() body: { name: string }) {
    return this.exampleService.updateData(id, body);
  }

  @Delete(':id')
  async deleteExample(@Param('id') id: number) {
    return this.exampleService.deleteData(id);
  }
}
