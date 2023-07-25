import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  processEnv(name: string): string {
    return this.configService.get<string>(`${name.toUpperCase()}`);
  }
}
