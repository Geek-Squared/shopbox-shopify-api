import { Injectable } from '@nestjs/common';
import { DeliveryDto } from './dto/delivery.dto';
import { RidersDto } from './dto/riders.dto';

@Injectable()
export class PluginsService {
  list() {
    return {
      resource: 'plugins',
      items: ['delivery'],
    };
  }

  delivery(payload: DeliveryDto) {
    return {
      plugin: 'delivery',
      action: 'execute',
      orderId: payload.orderId,
      etaMinutes: 45,
      trackingId: `dlv-${Date.now()}`,
    };
  }

  riders(payload: RidersDto) {
    return {
      plugin: 'delivery',
      action: 'riders',
      zone: payload.zone ?? 'all',
      riders: [],
    };
  }
}
