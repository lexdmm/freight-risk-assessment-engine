import { Module } from '@nestjs/common';
import { RiskAssessmentController } from './infrastructure/controllers/risk-assessment.controller';
import { EvaluateTransportRiskUseCase } from './application/use-cases/evaluate-transport-risk.use-case';
import { RiskEngineDomainService } from './domain/services/risk-engine.domain-service';
import { CargoValueInsuranceRule } from './domain/rules/cargo-value-insurance.rule';
import { TransportHistoryRule } from './domain/rules/transport-history.rule';
import { WeatherRule } from './domain/rules/weather.rule';
import { CargoTypeRule } from './domain/rules/cargo-type.rule';
import { RuleInterface } from './domain/rules/rule.interface';

@Module({
  controllers: [RiskAssessmentController],
  providers: [
    CargoTypeRule,
    WeatherRule,
    TransportHistoryRule,
    CargoValueInsuranceRule,
    {
      provide: RiskEngineDomainService,
      useFactory: (...rules: RuleInterface[]) =>
        new RiskEngineDomainService(rules),
      inject: [
        CargoTypeRule,
        WeatherRule,
        TransportHistoryRule,
        CargoValueInsuranceRule,
      ],
    },
    EvaluateTransportRiskUseCase,
  ],
})
export class RiskAssessmentModule {}
