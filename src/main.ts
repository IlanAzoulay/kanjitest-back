import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://main--lighthearted-gumption-c7f421.netlify.app'
    ],
    methods: ["GET", "POST"],
    credentials: true,
  });
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
