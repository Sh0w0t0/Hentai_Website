import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Hentai-Website Backend")
    .setDescription("Backend for the Hentai-Website")
    .addBearerAuth()
    .setVersion("0.1-Dev")
    .build();

  const document = SwaggerModule.createDocument(app, options)

  // Setup swagger documentation on path docs, here because we want a documentation, but can be removed in production
  SwaggerModule.setup("docs", app, document)

  await app.listen(3000);
}
bootstrap();
