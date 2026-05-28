import { Injectable } from '@nestjs/common';
import { TransportOperation } from '../../domain/value-objects/transport-operation.vo';
import { RiskEngineDomainService } from '../../domain/services/risk-engine.domain-service';
import { RiskAssessmentPresenter } from '../../presenters/risk-assessment.presenter';
import type { RiskAssessmentOutput } from '../../presenters/risk-assessment.presenter';

@Injectable()
export class EvaluateTransportRiskUseCase {
  constructor(private readonly engine: RiskEngineDomainService) {}

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
