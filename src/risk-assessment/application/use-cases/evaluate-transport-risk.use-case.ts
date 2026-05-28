import { TransportOperation } from '../../domain/value-objects/transport-operation.vo';
import { RiskEngineDomainService } from '../../domain/services/risk-engine.domain-service';
import {
  RiskAssessmentOutput,
  RiskAssessmentPresenter,
} from '../../presenters/risk-assessment.presenter';

export class EvaluateTransportRiskUseCase {
  private readonly engine = new RiskEngineDomainService();

  execute(transportOperation: TransportOperation): RiskAssessmentOutput {
    const riskContext =
      this.engine.evaluateTransportOperation(transportOperation);

    return RiskAssessmentPresenter.present(
      riskContext.getLevel(),
      riskContext.getReasons(),
      riskContext.getRecommendations(),
    );
  }
}
