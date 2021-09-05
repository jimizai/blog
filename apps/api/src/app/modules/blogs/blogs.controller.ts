import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { BlogEntity } from './blog.entity';
import { BlogsService } from './blogs.service';

@Crud({
  model: {
    type: BlogEntity,
  },
})
@Controller('blogs')
export class BlogsController {
  constructor(public service: BlogsService) {
    //
  }
}
