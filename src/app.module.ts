import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RiskAssessmentModule } from './risk-assessment/risk-assessment.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RiskAssessmentModule],
})
export class AppModule {}
