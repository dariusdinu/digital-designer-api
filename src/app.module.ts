import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dariusdinu:94M2YylOYtvkHKYr@cluster.wqwqoxt.mongodb.net/',
    ),
  ],
})
export class AppModule {}
