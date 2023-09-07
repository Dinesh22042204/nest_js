import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(('mongodb://localhost:27017/nest_js_tamil'),{

    serverSelectionTimeoutMS: 5000,

    autoIndex: false, // Don't build indexes

    maxPoolSize: 10, // Maintain up to 10 socket connections

    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity

    family: 4, // Use IPv4, skip trying IPv6

  }),
    StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
