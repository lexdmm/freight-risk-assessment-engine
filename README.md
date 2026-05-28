# Freight Risk Assessment Engine

API em NestJS para avaliar o risco de operações de transporte de carga.

## Requisitos

- Node.js 20+
- Yarn 1.x

## Configuração

1. Instale as dependências:

```bash
yarn install
```

2. Crie o arquivo de ambiente local:

```bash
cp .env.example .env
```

3. Variáveis disponíveis:

```env
PORT=3000
APP_URL=http://localhost:3000
```

## Como subir o projeto

Modo desenvolvimento:

```bash
yarn start:dev
```

Modo normal:

```bash
yarn start
```

Build de produção:

```bash
yarn build
yarn start:prod
```

## URLs locais

- API: `http://localhost:3000`
- Scalar API Docs: `http://localhost:3000/docs`

## Endpoint principal

`POST /risk-assessment`

Esse endpoint recebe os dados da operação de transporte e retorna:

- `finalRiskScore`
- `reasons`
- `recommendations`

## Exemplo de chamada

```bash
curl -X POST http://localhost:3000/risk-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "operation_id": "OP_20250910_001",
    "origin": "São Paulo",
    "destiny": "Rio de Janeiro",
    "total_distance_km": 430,
    "cargo_type": "Produtos Químicos Perigosos",
    "total_cargo_value": 75000.50,
    "traffic_accident_year_history": 2,
    "route_weather_forecast": "Estável",
    "has_insurance": true
  }'
```

## Exemplos de input JSON

### Exemplo 1: Risco Alto por Carga Perigosa

```json
{
  "operation_id": "OP_20250910_001",
  "origin": "São Paulo",
  "destiny": "Rio de Janeiro",
  "total_distance_km": 430,
  "cargo_type": "Produtos Químicos Perigosos",
  "total_cargo_value": 75000.50,
  "traffic_accident_year_history": 2,
  "route_weather_forecast": "Estável",
  "has_insurance": true
}
```

### Exemplo 2: Risco Alto com Fatores Múltiplos

```json
{
  "operation_id": "OP_20250910_002",
  "origin": "Porto Alegre",
  "destiny": "Curitiba",
  "total_distance_km": 700,
  "cargo_type": "Eletrônicos Sensíveis",
  "total_cargo_value": 65000.00,
  "traffic_accident_year_history": 4,
  "route_weather_forecast": "Chuva Forte com Ventos",
  "has_insurance": false
}
```

### Exemplo 3: Risco Crítico por Falta de Seguro

```json
{
  "operation_id": "OP_20250910_003",
  "origin": "Belo Horizonte",
  "destiny": "Salvador",
  "total_distance_km": 1500,
  "cargo_type": "Carga Geral Seca",
  "total_cargo_value": 250000.00,
  "traffic_accident_year_history": 3,
  "route_weather_forecast": "Estável",
  "has_insurance": false
}
```

### Exemplo 4: Risco Baixo (Cenário Ideal)

```json
{
  "operation_id": "OP_20250910_004",
  "origin": "Joinville",
  "destiny": "Blumenau",
  "total_distance_km": 50,
  "cargo_type": "Alimentos Perecíveis",
  "total_cargo_value": 25000.00,
  "traffic_accident_year_history": 0,
  "route_weather_forecast": "Estável",
  "has_insurance": true
}
```

## Scripts úteis

```bash
yarn lint
yarn build
```
