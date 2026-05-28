import { TransportOperation } from '../value-objects/transport-operation.vo';
import { RiskContext } from '../entities/risk-context.entity';
import { RuleInterface } from './rule.interface';

/**
 * Regra 3 (Histórico da Transportadora):
Se traffic_accident_year_history > 5, o risco aumenta em um nível.
Se traffic_accident_year_history > 10, o risco aumenta em dois níveis.
 */

export class TransportHistoryRule implements RuleInterface {
  evaluate(
    transportOperation: TransportOperation,
    riskContext: RiskContext,
  ): void {
    if (transportOperation.trafficAccidentYearHistory > 10) {
      riskContext.increaseLevel(2);
      riskContext.addReason(
        `Transportadora com histórico crítico de sinistros: ${transportOperation.trafficAccidentYearHistory} ocorrências no último ano.`,
      );
      riskContext.addRecommendation(
        'Substituir transportadora ou exigir inspeção veicular completa antes da operação.',
      );
      return;
    }

    if (transportOperation.trafficAccidentYearHistory > 5) {
      riskContext.increaseLevel(1);
      riskContext.addReason(
        `Transportadora com histórico elevado de sinistros: ${transportOperation.trafficAccidentYearHistory} ocorrências no último ano.`,
      );
      riskContext.addRecommendation(
        'Solicitar inspeção veicular e verificar certificações da transportadora.',
      );
    }
  }
}
