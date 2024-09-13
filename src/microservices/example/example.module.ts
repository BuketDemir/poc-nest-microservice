
import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ExampleController],
  providers: [ExampleService, PrismaService],
})
export class ExampleModule {}
