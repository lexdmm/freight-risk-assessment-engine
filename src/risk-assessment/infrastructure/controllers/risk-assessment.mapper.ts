import { CreateRiskAssessmentDto } from '../dtos/create-risk-assessment.dto';
import { TransportOperation } from '../../domain/value-objects/transport-operation.vo';

export class RiskAssessmentMapper {
  static toTransportOperation(
    dto: CreateRiskAssessmentDto,
  ): TransportOperation {
    return {
      operationId: dto.operation_id,
      origin: dto.origin,
      destiny: dto.destiny,
      totalDistanceKm: dto.total_distance_km,
      cargoType: dto.cargo_type,
      totalCargoValue: dto.total_cargo_value,
      trafficAccidentYearHistory: dto.traffic_accident_year_history,
      routeWeatherForecast: dto.route_weather_forecast,
      hasInsurance: dto.has_insurance,
    };
  }
}
