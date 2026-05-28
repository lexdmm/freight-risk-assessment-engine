import { Body, Controller, Post } from '@nestjs/common';
import { RiskAssessmentMapper } from './risk-assessment.mapper';
import { EvaluateTransportRiskUseCase } from '../../application/use-cases/evaluate-transport-risk.use-case';
import { CreateRiskAssessmentDto } from '../dtos/create-risk-assessment.dto';
import type { RiskAssessmentOutput } from '../../domain/entities/risk-context.entity';

@Controller('risk-assessment')
export class RiskAssessmentController {
  private readonly useCase = new EvaluateTransportRiskUseCase();

  @Post()
  evaluate(@Body() dto: CreateRiskAssessmentDto): RiskAssessmentOutput {
    const transportOperation = RiskAssessmentMapper.toTransportOperation(dto);
    return this.useCase.execute(transportOperation);
  }
}
