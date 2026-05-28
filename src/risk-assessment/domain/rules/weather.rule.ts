import {
  WeatherForecast,
  TransportOperation,
} from '../value-objects/transport-operation.vo';
import { RiskContext } from '../entities/risk-context.entity';
import { RuleInterface } from './rule.interface';

/**
Regra 2 (Condições Climáticas):
Se route_weather_forecast for “Chuva Forte com Ventos” ou “Neve/Gelo”, o risco aumenta em um nível.
 */

export class WeatherRule implements RuleInterface {
  evaluate(
    transportOperation: TransportOperation,
    riskContext: RiskContext,
  ): void {
    const severeWeather = [
      WeatherForecast.HEAVY_RAIN_WINDS,
      WeatherForecast.SNOW_ICE,
    ];
    const moderateWeather = [WeatherForecast.MODERATE_RAIN];

    if (severeWeather.includes(transportOperation.routeWeatherForecast)) {
      riskContext.increaseLevel(1);
      riskContext.addReason(
        `Condição climática severa prevista na rota: ${transportOperation.routeWeatherForecast}.`,
      );
      riskContext.addRecommendation(
        'Reavaliar rota ou aguardar melhora nas condições climáticas.',
      );
    }

    if (moderateWeather.includes(transportOperation.routeWeatherForecast)) {
      riskContext.addReason(
        `Condição climática moderada prevista na rota: ${transportOperation.routeWeatherForecast}.`,
      );
      riskContext.addRecommendation(
        'Monitorar previsão do tempo durante o trajeto.',
      );
    }
  }
}
