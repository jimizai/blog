import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<UsersEntity> {
  constructor(@InjectRepository(UsersEntity) repo: Repository<UsersEntity>) {
    super(repo);
  }
}
