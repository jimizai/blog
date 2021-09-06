import { BaseModel } from '../../bases/model';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tags' })
export class TagsEntity extends BaseModel {
  @Column()
  name: string;
}
