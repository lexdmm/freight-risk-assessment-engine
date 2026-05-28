import { RiskAssessmentOutput } from '../../domain/entities/risk-context.entity';
import { RiskEngineDomainService } from '../../domain/services/risk-engine.domain-service';
import { TransportOperation } from '../../domain/value-objects/transport-operation.vo';

export class EvaluateTransportRiskUseCase {
  private readonly engine = new RiskEngineDomainService();

  execute(transportOperation: TransportOperation): RiskAssessmentOutput {
    const riskContext =
      this.engine.evaluateTransportOperation(transportOperation);
    return riskContext.toOutput();
  }
}
