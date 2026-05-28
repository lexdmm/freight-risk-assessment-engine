import { IsString, IsNumber, IsBoolean, IsEnum, Min } from 'class-validator';
import {
  CargoType,
  WeatherForecast,
} from '../../domain/value-objects/transport-operation.vo';

export class CreateRiskAssessmentDto {
  @IsString()
  operation_id!: string;

  @IsString()
  origin!: string;

  @IsString()
  destiny!: string;

  @IsNumber()
  @Min(1)
  total_distance_km!: number;

  @IsEnum(CargoType)
  cargo_type!: CargoType;

  @IsNumber()
  @Min(0)
  total_cargo_value!: number;

  @IsNumber()
  @Min(0)
  traffic_accident_year_history!: number;

  @IsEnum(WeatherForecast)
  route_weather_forecast!: WeatherForecast;

  @IsBoolean()
  has_insurance!: boolean;
}
