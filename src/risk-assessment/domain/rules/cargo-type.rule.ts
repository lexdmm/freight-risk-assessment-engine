import {
  CargoType,
  TransportOperation,
} from '../value-objects/transport-operation.vo';
import { RuleInterface } from './rule.interface';

/**
 *  Regra 1: Tipos de carga
 *  - HAZARDOUS_CHEMICALS: Produtos químicos perigosos -> risco alto
 *  - PERISHABLE_FOOD: Alimentos perecíveis com distância maior que 300km -> risco médio
 *  - SENSITIVE_ELECTRONICS: Eletrônicos sensíveis com valor superior a 50 mil -> risco médio
 */

export class CargoTypeRule implements RuleInterface {
  evaluate(transportOperation: TransportOperation): void {
    if (transportOperation.cargoType === CargoType.HAZARDOUS_CHEMICALS) {
      return; // falta eu definir os metodos do RiskContext
    }

    if (
      transportOperation.cargoType === CargoType.PERISHABLE_FOOD &&
      transportOperation.totalDistanceKm > 300
    ) {
      return;
    }

    if (
      transportOperation.cargoType === CargoType.SENSITIVE_ELECTRONICS &&
      transportOperation.totalCargoValue > 50000
    ) {
      return;
    }
  }
}
