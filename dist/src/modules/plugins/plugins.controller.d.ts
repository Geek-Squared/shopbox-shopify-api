import { DeliveryDto } from './dto/delivery.dto';
import { RidersDto } from './dto/riders.dto';
import { PluginsService } from './plugins.service';
export declare class PluginsController {
    private readonly pluginsService;
    constructor(pluginsService: PluginsService);
    list(): {
        resource: string;
        items: string[];
    };
    delivery(payload: DeliveryDto): {
        plugin: string;
        action: string;
        orderId: string;
        etaMinutes: number;
        trackingId: string;
    };
    riders(payload: RidersDto): {
        plugin: string;
        action: string;
        zone: string;
        riders: any[];
    };
}
