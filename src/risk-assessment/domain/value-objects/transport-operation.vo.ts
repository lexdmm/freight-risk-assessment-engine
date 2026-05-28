export enum CargoType {
  SENSITIVE_ELECTRONICS = 'Eletrônicos Sensíveis',
  PERISHABLE_FOOD = 'Alimentos Perecíveis',
  HAZARDOUS_CHEMICALS = 'Produtos Químicos Perigosos',
  DRY_GENERAL_CARGO = 'Carga Geral Seca',
  AUTOMOTIVE = 'Automotiva',
}

export enum WeatherForecast {
  STABLE = 'Estável',
  MODERATE_RAIN = 'Chuva Moderada',
  HEAVY_RAIN_WINDS = 'Chuva Forte com Ventos',
  SNOW_ICE = 'Neve/Gelo',
}

export interface TransportOperation {
  operationId: string;
  origin: string;
  destiny: string;
  totalDistanceKm: number;
  cargoType: CargoType;
  totalCargoValue: number;
  trafficAccidentYearHistory: number;
  routeWeatherForecast: WeatherForecast;
  hasInsurance: boolean;
}
