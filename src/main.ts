import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({
    credentials: true,
    origin: ['http://localhost:8081'],
  });

  await app.listen(process.env.PORT || 4000, () => {
    console.log(`App running on port:${process.env.PORT}`);
  });
}
bootstrap();
