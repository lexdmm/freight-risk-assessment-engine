import { IsString, IsNumber, IsBoolean, IsEnum, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  CargoType,
  WeatherForecast,
} from '../../domain/value-objects/transport-operation.vo';

export class CreateRiskAssessmentDto {
  @ApiProperty({
    example: 'OP_20250910_001',
    description: 'Identificador único da operação',
  })
  @IsString()
  operation_id!: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Cidade de origem da carga',
  })
  @IsString()
  origin!: string;

  @ApiProperty({
    example: 'Rio de Janeiro',
    description: 'Cidade de destino da carga',
  })
  @IsString()
  destiny!: string;

  @ApiProperty({
    example: 430,
    description: 'Distância total da rota em quilômetros',
  })
  @IsNumber()
  @Min(1)
  total_distance_km!: number;

  @ApiProperty({
    enum: CargoType,
    example: CargoType.HAZARDOUS_CHEMICALS,
    description: 'Categoria da carga',
  })
  @IsEnum(CargoType)
  cargo_type!: CargoType;

  @ApiProperty({
    example: 75000.5,
    description: 'Valor monetário da carga em BRL',
  })
  @IsNumber()
  @Min(0)
  total_cargo_value!: number;

  @ApiProperty({
    example: 2,
    description: 'Número de sinistros reportados nos últimos 12 meses',
  })
  @IsNumber()
  @Min(0)
  traffic_accident_year_history!: number;

  @ApiProperty({
    enum: WeatherForecast,
    example: WeatherForecast.STABLE,
    description: 'Condições climáticas previstas para a rota',
  })
  @IsEnum(WeatherForecast)
  route_weather_forecast!: WeatherForecast;

  @ApiProperty({
    example: true,
    description: 'Indica se a carga possui seguro específico para a viagem',
  })
  @IsBoolean()
  has_insurance!: boolean;
}
