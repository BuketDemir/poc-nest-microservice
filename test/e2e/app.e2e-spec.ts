
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';

describe('Example Microservice E2E Test', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should create a new record in the example microservice', async () => {
    return request(app.getHttpServer())
      .post('/example')
      .send({ name: 'Test' })
      .expect(201)
      .expect({ id: 1, name: 'Test' });
  });

  afterAll(async () => {
    await app.close();
  });
});
