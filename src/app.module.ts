import { Module } from '@nestjs/common';
import { RiskAssessmentModule } from './risk-assessment/risk-assessment.module';

@Module({
  imports: [RiskAssessmentModule],
})
export class AppModule {}
