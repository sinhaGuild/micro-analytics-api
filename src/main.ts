import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose'],
  });

  /**
   * Setup Swagger
   */
  const config = new DocumentBuilder()
    .setTitle('Analytics Service')
    .setDescription(
      'Opinionated Analytics Service exposing interesting datasets from the EDL.',
    )
    .setVersion('0.1')
    .build();

  //bind to app
  const document = SwaggerModule.createDocument(app, config);
  //define end point
  SwaggerModule.setup('docs', app, document);

  //Start service
  await app.listen(3000);
}
bootstrap();
