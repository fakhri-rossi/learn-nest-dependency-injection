import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService], // bisa digunakan dlm module, tp msh private
  exports: [PowerService], // bisa digunakan di luar module
})
export class PowerModule {}
