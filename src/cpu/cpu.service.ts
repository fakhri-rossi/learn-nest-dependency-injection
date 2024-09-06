import { Injectable } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';

@Injectable()
export class CpuService {
  constructor(private powerModule: PowerModule) {}
}
