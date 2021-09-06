import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  index() {
    return 'hello home';
  }
}
