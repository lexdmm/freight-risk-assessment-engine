import { RuleInterface } from '../rules/rule.interface';
import { RiskContext } from '../entities/risk-context.entity';
import { TransportOperation } from '../value-objects/transport-operation.vo';
import { CargoTypeRule } from '../rules/cargo-type.rule';
import { WeatherRule } from '../rules/weather.rule';
import { TransportHistoryRule } from '../rules/transport-history.rule';
import { CargoValueInsuranceRule } from '../rules/cargo-value-insurance.rule';

export class RiskEngineDomainService {
  // Aqui e a lista com fluxo na ordem que tem que ser pra nao dar pau
  private readonly rules: RuleInterface[] = [
    new CargoTypeRule(),
    new WeatherRule(),
    new TransportHistoryRule(),
    new CargoValueInsuranceRule(),
  ];

  /**
   * Avalia o risco de uma operação de transporte com base nas regras implementadas.
   *
   * @param transportOperation Operação de transporte a ser avaliada.
   * @returns Contexto de risco com o nível de risco final e as razões e recomendações.
   */
  evaluateTransportOperation(
    transportOperation: TransportOperation,
  ): RiskContext {
    const riskContext = new RiskContext();

    for (const rule of this.rules) {
      rule.evaluate(transportOperation, riskContext);

      //após cada regra executar, o engine verifica se o contexto foi marcado como final
      if (riskContext.isFinal()) {
        break;
      }
    }

    return riskContext;
  }
}
