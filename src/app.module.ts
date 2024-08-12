import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import dotenv from 'dotenv';
import { ProjectsModule } from './projects/projects.module';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      ignoreEnvFile: false,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_KEY),
    ProjectsModule,
  ],
})
export class AppModule {}
