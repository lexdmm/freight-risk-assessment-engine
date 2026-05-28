import { Module } from '@nestjs/common';
import { RiskAssessmentController } from './infrastructure/controllers/risk-assessment.controller';
import { EvaluateTransportRiskUseCase } from './application/use-cases/evaluate-transport-risk.use-case';
import { RiskEngineDomainService } from './domain/services/risk-engine.domain-service';

@Module({
  controllers: [RiskAssessmentController],
  providers: [RiskEngineDomainService, EvaluateTransportRiskUseCase],
})
export class RiskAssessmentModule {}
