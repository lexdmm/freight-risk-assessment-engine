import { TransportOperation } from '../value-objects/transport-operation.vo';
import { RiskContext } from '../entities/risk-context.entity';
import { RuleInterface } from './rule.interface';
import { RiskLevel } from '../value-objects/risk-level.vo';

/**
 * Regra 4 (Valor da Carga e Seguro):
Se total_cargo_value > 200000 BRL E has_insurance for false, o risco é “Crítico”, independentemente de outras condições.
 */
export class CargoValueInsuranceRule implements RuleInterface {
  evaluate(
    transportOperation: TransportOperation,
    riskContext: RiskContext,
  ): void {
    if (
      transportOperation.totalCargoValue > 200000 &&
      !transportOperation.hasInsurance
    ) {
      riskContext.setFinal(
        RiskLevel.CRITICAL,
        `Carga com valor de R$ ${transportOperation.totalCargoValue.toFixed(2)} sem cobertura de seguro.`,
        'Contratar seguro específico para a carga antes de iniciar a operação.',
      );
      return;
    }

    if (!transportOperation.hasInsurance) {
      riskContext.addReason('Operação sem cobertura de seguro.');
      riskContext.addRecommendation(
        'Avaliar contratação de seguro para a carga.',
      );
    }
  }
}
