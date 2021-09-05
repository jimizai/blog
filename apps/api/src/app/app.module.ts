import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './modules/home/home.controller';
import { BlogsController } from './modules/blogs/blogs.controller';
import { BlogsService } from './modules/blogs/blogs.service';
import { getEnv } from '../environments';
import { entities } from './app.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...(getEnv('orm') as any), entities }),
    TypeOrmModule.forFeature(entities),
    AuthModule,
  ],
  controllers: [AppController, HomeController, BlogsController],
  providers: [AppService, BlogsService],
})
export class AppModule {}
