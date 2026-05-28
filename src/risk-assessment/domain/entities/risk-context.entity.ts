import { increaseRiskLevel, RiskLevel } from '../value-objects/risk-level.vo';

export interface RiskAssessmentOutput {
  finalRiskScore: string;
  reasons: string[];
  recommendations: string[];
}

export class RiskContext {
  private level: RiskLevel = RiskLevel.LOW; //por padrao aqui vai ser o mais baixo
  private readonly reasons: string[] = []; // alista dos motivos
  private readonly recommendations: string[] = []; // a lisa das recomendacoes de mitigacao.

  getLevel(): RiskLevel {
    return this.level;
  }

  setLevel(level: RiskLevel): void {
    this.level = level;
  }

  increaseLevel(levels = 1): void {
    this.level = increaseRiskLevel(this.level, levels);
  }

  addReason(reason: string): void {
    this.reasons.push(reason);
  }

  addRecommendation(recommendation: string): void {
    this.recommendations.push(recommendation);
  }
}
