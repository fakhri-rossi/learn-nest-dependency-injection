import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('CPU needs 10 watts to perform this operation');
    this.powerService.supplyPower(10, 'CPU');

    return a + b;
  }
}
