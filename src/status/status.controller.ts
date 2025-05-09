import { Controller, Logger } from '@nestjs/common';
import { StatusService } from './status.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { DeviceStatusDto } from './dto/device-status.dto';

@Controller()
export class StatusController {
  private readonly logger = new Logger(StatusController.name);
  constructor(private readonly statusService: StatusService) {}

  @EventPattern('device.status')
  handleDeviceStatus(@Payload() data: DeviceStatusDto) {
    this.logger.warn(`Mensaje recibido!!!: ${JSON.stringify(data)}`);
  }
}
