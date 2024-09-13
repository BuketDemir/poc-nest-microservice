
import { Test, TestingModule } from '@nestjs/testing';
import { ExampleService } from '../src/microservices/example/example.service';  
import { PrismaService } from '../src/prisma/prisma.service';


describe('ExampleService CRUD', () => {
  let service: ExampleService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleService, PrismaService],
    }).compile();

    service = module.get<ExampleService>(ExampleService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should create a new record', async () => {
    jest.spyOn(prisma.exampleModel, 'create').mockResolvedValue({ id: 1, name: 'Test' });
    const result = await service.createData({ name: 'Test' });
    expect(result).toEqual({ id: 1, name: 'Test' });
  });

  it('should retrieve a record', async () => {
    jest.spyOn(prisma.exampleModel, 'findUnique').mockResolvedValue({ id: 1, name: 'Test' });
    const result = await service.getData(1);
    expect(result).toEqual({ id: 1, name: 'Test' });
  });

  it('should update a record', async () => {
    jest.spyOn(prisma.exampleModel, 'update').mockResolvedValue({ id: 1, name: 'Updated Test' });
    const result = await service.updateData(1, { name: 'Updated Test' });
    expect(result).toEqual({ id: 1, name: 'Updated Test' });
  });

  it('should delete a record', async () => {
    jest.spyOn(prisma.exampleModel, 'delete').mockResolvedValue({ id: 1, name: 'Deleted Test' });
    const result = await service.deleteData(1);
    expect(result).toEqual({ id: 1, name: 'Deleted Test' });
  });
});
