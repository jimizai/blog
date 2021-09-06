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
import { TagsController } from './modules/tags/tags.controller';
import { TagsService } from './modules/tags/tags.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...(getEnv('orm') as any), entities }),
    TypeOrmModule.forFeature(entities),
    AuthModule,
  ],
  controllers: [AppController, HomeController, BlogsController, TagsController],
  providers: [AppService, BlogsService, TagsService],
})
export class AppModule {}
