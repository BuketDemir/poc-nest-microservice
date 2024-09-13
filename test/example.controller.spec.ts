
import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from '../src/microservices/example/example.controller';
import { ExampleService } from '../src/microservices/example/example.service';  
import { PrismaService } from '../src/prisma/prisma.service';


describe('ExampleController CRUD', () => {
  let controller: ExampleController;
  let service: ExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [ExampleService, PrismaService],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
    service = module.get<ExampleService>(ExampleService);
  });

  it('should return the created record', async () => {
    jest.spyOn(service, 'createData').mockResolvedValue({ id: 1, name: 'Test' });
    const result = await controller.createExample({ name: 'Test' });
    expect(result).toEqual({ id: 1, name: 'Test' });
  });

  it('should return the retrieved record', async () => {
    jest.spyOn(service, 'getData').mockResolvedValue({ id: 1, name: 'Test' });
    const result = await controller.getExample(1);
    expect(result).toEqual({ id: 1, name: 'Test' });
  });

  it('should return the updated record', async () => {
    jest.spyOn(service, 'updateData').mockResolvedValue({ id: 1, name: 'Updated Test' });
    const result = await controller.updateExample(1, { name: 'Updated Test' });
    expect(result).toEqual({ id: 1, name: 'Updated Test' });
  });

  it('should return the deleted record', async () => {
    jest.spyOn(service, 'deleteData').mockResolvedValue({ id: 1, name: 'Deleted Test' });
    const result = await controller.deleteExample(1);
    expect(result).toEqual({ id: 1, name: 'Deleted Test' });
  });
});
