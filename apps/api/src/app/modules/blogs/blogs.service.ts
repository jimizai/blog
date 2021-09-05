import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';

@Injectable()
export class BlogsService extends TypeOrmCrudService<BlogEntity> {
  constructor(@InjectRepository(BlogEntity) repo: Repository<BlogEntity>) {
    super(repo);
  }
}
