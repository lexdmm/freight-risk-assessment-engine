import { RiskContext } from '../entities/risk-context.entity';
import { TransportOperation } from '../value-objects/transport-operation.vo';

// Meu contrato unico para todas as regras
export interface RuleInterface {
  evaluate(
    transportOperation: TransportOperation,
    riskContext: RiskContext,
  ): void;
}
