export enum RiskLevel {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2,
  CRITICAL = 3,
}

export const RiskLevelLabel: Record<RiskLevel, string> = {
  [RiskLevel.LOW]: 'Baixo',
  [RiskLevel.MEDIUM]: 'Médio',
  [RiskLevel.HIGH]: 'Alto',
  [RiskLevel.CRITICAL]: 'Crítico',
};

export function increaseRiskLevel(current: RiskLevel, levels = 1): RiskLevel {
  const next = current + levels;
  const capped = Math.min(next, RiskLevel.CRITICAL); // travazinha pra nao passar do 3 e nao dar problema de tipo
  return capped;
}
