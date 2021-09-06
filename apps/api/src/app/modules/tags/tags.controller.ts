import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { TagsEntity } from './tags.entity';
import { TagsService } from './tags.service';

@Crud({
  model: {
    type: TagsEntity,
  },
})
@Controller('tags')
export class TagsController {
  constructor(public service: TagsService) {
    //
  }
}
