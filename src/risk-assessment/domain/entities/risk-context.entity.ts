import { RiskLevel } from '../value-objects/risk-level.vo';

export interface RiskAssessmentOutput {
  finalRiskScore: string;
  reasons: string[];
  recommendations: string[];
}

export class RiskContext {
  private level: RiskLevel = RiskLevel.LOW;
  private readonly reasons: string[] = [];
  private readonly recommendations: string[] = [];
}
