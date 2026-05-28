import { Module } from '@nestjs/common';
import { RiskAssessmentController } from './infrastructure/controllers/risk-assessment.controller';

@Module({
  controllers: [RiskAssessmentController],
})
export class RiskAssessmentModule {}
