import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';
import { ConfigModule } from '@nestjs/config';
import { DigitaloceanModule } from './digitalocean/digitalocean.module';
import dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://dariusdinu:94M2YylOYtvkHKYr@cluster.wqwqoxt.mongodb.net/digital_designer_api',
    ),
    ProjectsModule,
    DigitaloceanModule,
  ],
})
export class AppModule {}
