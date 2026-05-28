import {
  RiskLevel,
  RiskLevelLabel,
} from '../../domain/value-objects/risk-level.vo';

export interface RiskAssessmentOutput {
  finalRiskScore: string;
  reasons: string[];
  recommendations: string[];
}

export class RiskAssessmentPresenter {
  static present(
    level: RiskLevel,
    reasons: string[],
    recommendations: string[],
  ): RiskAssessmentOutput {
    return {
      finalRiskScore: RiskLevelLabel[level],
      reasons: [...reasons],
      recommendations: [...recommendations],
    };
  }
}
