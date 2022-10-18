import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { FormModule } from './form/form.module';

@Module({
  imports: [FormModule, MongooseModule.forRoot("mongodb+srv://ilan:test@cluster0.ntonz7i.mongodb.net/?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
