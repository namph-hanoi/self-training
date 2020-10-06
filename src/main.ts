import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('Bootstrap')
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const serverConfig = config.get('server');
  console.log(["bootstrap -> serverConfig", serverConfig])

  logger.log('Bootstrap beautifully - YOLO')
}
bootstrap();
