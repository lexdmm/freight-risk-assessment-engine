import { Injectable } from '@nestjs/common';
import { RuleInterface } from '../rules/rule.interface';
import { RiskContext } from '../entities/risk-context.entity';
import { TransportOperation } from '../value-objects/transport-operation.vo';

@Injectable()
export class RiskEngineDomainService {
  constructor(private readonly rules: RuleInterface[]) {}

  evaluateTransportOperation(
    transportOperation: TransportOperation,
  ): RiskContext {
    const riskContext = new RiskContext();

    for (const rule of this.rules) {
      rule.evaluate(transportOperation, riskContext);

      if (riskContext.isFinal()) {
        break;
      }
    }

    return riskContext;
  }
}
