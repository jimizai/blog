import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { TagsEntity } from './tags.entity';

@Injectable()
export class TagsService extends TypeOrmCrudService<TagsEntity> {
  constructor(@InjectRepository(TagsEntity) repo: Repository<TagsEntity>) {
    super(repo);
  }
}
