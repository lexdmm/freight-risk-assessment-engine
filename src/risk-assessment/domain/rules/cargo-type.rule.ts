import { RiskContext } from '../entities/risk-context.entity';
import { RiskLevel } from '../value-objects/risk-level.vo';
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
  evaluate(
    transportOperation: TransportOperation,
    riskContext: RiskContext,
  ): void {
    if (transportOperation.cargoType === CargoType.HAZARDOUS_CHEMICALS) {
      riskContext.setLevel(RiskLevel.HIGH);
      riskContext.addReason(
        'Carga classificada como produtos químicos perigosos.',
      );
      riskContext.addRecommendation(
        'Verificar licenças de transporte para produtos perigosos.',
      );
    }

    if (
      transportOperation.cargoType === CargoType.PERISHABLE_FOOD &&
      transportOperation.totalDistanceKm > 300
    ) {
      riskContext.increaseLevel(1);
      riskContext.addReason(
        'Alimentos perecíveis em rota com distância superior a 300km.',
      );
      riskContext.addRecommendation(
        'Verificar sistema de refrigeração do veículo antes da partida.',
      );
    }

    if (
      transportOperation.cargoType === CargoType.SENSITIVE_ELECTRONICS &&
      transportOperation.totalCargoValue > 50000
    ) {
      riskContext.increaseLevel(1);
      riskContext.addReason(
        'Eletrônicos sensíveis com valor superior a R$ 50.000,00.',
      );
      riskContext.addRecommendation(
        'Considerar escolta e rastreamento em tempo real.',
      );
    }
  }
}
