import { Body, Controller, Post } from '@nestjs/common';
import { DompetDto } from './dto';
import { DompetService } from './dompet.service';

@Controller('dompet')
export class DompetController {
  constructor(private dompetService: DompetService) {}

  @Post('/')
  async createDompet(@Body() dto: DompetDto) {
    return this.dompetService.createDompet(dto);
  }
}
