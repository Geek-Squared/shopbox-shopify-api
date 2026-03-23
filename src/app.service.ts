import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      service: 'shopbox-api',
      status: 'ok',
      message: 'Shopbox API is running',
      timestamp: new Date().toISOString(),
    };
  }
}
