import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EvaluateTransportRiskUseCase } from '../../application/use-cases/evaluate-transport-risk.use-case';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateRiskAssessmentDto } from '../dtos/create-risk-assessment.dto';
import type { RiskAssessmentOutput } from '../../presenters/risk-assessment.presenter';
import { RiskAssessmentMapper } from './risk-assessment.mapper';

@ApiTags('Risk Assessment')
@Controller('risk-assessment')
export class RiskAssessmentController {
  constructor(private readonly useCase: EvaluateTransportRiskUseCase) {}

  @Post()
  @ApiOperation({
    summary: 'Avaliar risco de operação de transporte',
    description:
      'Recebe os dados de uma operação de transporte e retorna o nível de risco calculado com os motivos e recomendações.',
  })
  @ApiResponse({
    status: 201,
    description: 'Avaliação de risco realizada com sucesso.',
    schema: {
      example: {
        finalRiskScore: 'Alto',
        reasons: ['Carga classificada como produtos químicos perigosos.'],
        recommendations: [
          'Verificar licenças de transporte para produtos perigosos.',
        ],
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos ou campos obrigatórios ausentes.',
  })
  evaluate(@Body() dto: CreateRiskAssessmentDto): RiskAssessmentOutput {
    const transportOperation = RiskAssessmentMapper.toTransportOperation(dto);
    return this.useCase.execute(transportOperation);
  }
}
