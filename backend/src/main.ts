import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Hentai-Website Backend")
    .setDescription("Backend for the Hentai-Website")
    .addBearerAuth()
    .setVersion("0.1-Dev")
    .build();

  await app.listen(3000);
}
bootstrap();
