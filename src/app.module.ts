
import { Module } from '@nestjs/common';
import { ExampleModule } from './microservices/example/example.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ExampleModule],
  providers: [PrismaService],
})
export class AppModule {}
