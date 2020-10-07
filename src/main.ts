import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('Bootstrap')
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server');
  
  await app.listen(3000);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: serverConfig.origin });
    logger.log(`Accepting requests from origin of "${serverConfig.origin}"`)
  }

  console.log(["bootstrap -> serverConfig", serverConfig])

  logger.log('Bootstrap beautifully - YOLO')
}
bootstrap();
