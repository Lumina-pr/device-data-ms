// import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class DeviceStatusDto {
  deviceId: string;

  current: number;

  voltage: number;
}
