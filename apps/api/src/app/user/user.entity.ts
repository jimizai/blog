import { BaseModel } from '../bases/model';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseModel {
  @Column()
  username: string;

  @Column()
  password: string;
}
