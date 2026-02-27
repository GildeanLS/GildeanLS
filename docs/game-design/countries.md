# Especificação de Países e Expansão Internacional

## Objetivo
Definir um sistema de países jogáveis para o MVP com diferenças econômicas e regulatórias que impactam estratégia, risco e ritmo de crescimento.

---

## 1) Lista inicial de países jogáveis (MVP)

> Escala sugerida para atributos qualitativos: **1 (baixo/fácil)** a **5 (alto/difícil)**.

| País | Moeda local | Nível de burocracia | Custo trabalhista | Impostos corporativos | Estabilidade regulatória |
|---|---|---:|---:|---:|---:|
| Brasil | BRL (R$) | 4 | 3 | 4 | 3 |
| Estados Unidos | USD (US$) | 2 | 4 | 3 | 4 |
| Alemanha | EUR (€) | 3 | 5 | 4 | 5 |
| Índia | INR (₹) | 4 | 2 | 3 | 3 |
| México | MXN ($) | 3 | 2 | 3 | 3 |
| Singapura | SGD (S$) | 1 | 4 | 2 | 5 |
| Emirados Árabes Unidos | AED (د.إ) | 2 | 3 | 2 | 4 |
| Japão | JPY (¥) | 3 | 4 | 4 | 5 |

### Notas de design para o MVP
- Países com **burocracia alta** devem exigir mais documentos/eventos de compliance.
- Países com **custo trabalhista alto** aumentam custos fixos mensais ao escalar equipe local.
- Países com **impostos altos** reduzem margem líquida e tornam planejamento tributário mais relevante.
- **Estabilidade regulatória baixa** aumenta chance de eventos surpresa (regras mudando, taxas extras, auditorias).

---

## 2) Regras para abrir empresa no país inicial

1. **Escolha do país inicial na criação da campanha**.
2. O jogador recebe um **capital inicial base** (ex.: 100.000 unidades monetárias convertidas para moeda local).
3. Para formalizar a empresa inicial:
   - pagar **taxa de abertura local** (varia por país),
   - selecionar tipo societário disponível no país,
   - contratar no mínimo **1 responsável legal local** (NPC ou funcionário),
   - cumprir checklist de **compliance básico**:
     - registro fiscal,
     - endereço comercial válido,
     - documentação de beneficiário final.
4. Enquanto a empresa não é aprovada, o jogador fica no estado **“Pré-operação”**:
   - pode planejar, contratar consultoria e preparar produto,
   - **não pode faturar** nem emitir contratos comerciais.
5. Após aprovação, o jogador entra em **“Operação Local”** e libera atividades comerciais completas no país inicial.

---

## 3) Regras de mudança/expansão para outro país (caminho legal)

### 3.1 Conceito
Expansão internacional ocorre via **abertura legal de presença** (filial, subsidiária ou nova matriz regional), nunca por mudança instantânea do território operacional.

### 3.2 Requisitos mínimos para solicitar expansão
Para solicitar entrada em novo país, o jogador precisa atender simultaneamente:

- **Capital mínimo disponível**: `>= custo_base_expansao do país-alvo`.
- **Tempo mínimo de operação**: `>= 12 meses` no país atual.
- **Compliance acumulado**:
  - score de compliance global `>= 70/100`,
  - sem multas graves ativas,
  - pelo menos 1 auditoria interna concluída.

### 3.3 Custos de abertura (filial/matriz)

| Tipo de presença | Fórmula de custo sugerida | Observação |
|---|---|---|
| Filial | `custo_base_pais × 1,0` | Menor autonomia, implantação mais rápida |
| Subsidiária (empresa local) | `custo_base_pais × 1,5` | Maior autonomia e benefícios locais |
| Matriz regional | `custo_base_pais × 2,2` | Exige porte maior, aumenta governança |

**Custo base por país (MVP):**
- Brasil: 90.000
- EUA: 120.000
- Alemanha: 140.000
- Índia: 70.000
- México: 80.000
- Singapura: 110.000
- EAU: 100.000
- Japão: 130.000

### 3.4 Tempo de aprovação

`tempo_aprovacao_meses = tempo_base_pais + modificador_burocracia - bonus_consultoria`

- `tempo_base_pais`: entre 2 e 5 meses.
- `modificador_burocracia`: `+0` a `+3` meses (conforme nível de burocracia).
- `bonus_consultoria`: `0` a `-1` mês (se contratar serviço especializado premium).
- Valor final mínimo: **1 mês**.

### 3.5 Chance de reprovação e motivos

Chance inicial sugerida:

`chance_reprovacao = base_pais + penalidade_compliance + penalidade_documentacao - bonus_reputacao`

- `base_pais`: 5% a 18%.
- `penalidade_compliance`: +0% a +20% (score baixo ou incidentes recentes).
- `penalidade_documentacao`: +0% a +15% (docs faltantes/incorretos).
- `bonus_reputacao`: -0% a -10% (histórico limpo e marca forte).
- Limites: mínimo 2%, máximo 45%.

**Motivos de reprovação (eventos):**
- documentação societária inconsistente;
- exigência não cumprida de representante local;
- passivos regulatórios pendentes no país de origem;
- incompatibilidade de atividade econômica com licença solicitada;
- mudança regulatória no meio do processo.

Quando há reprovação:
- parte das taxas é perdida (ex.: 40%),
- solicitações futuras naquele país recebem um cooldown de 1–3 meses,
- é gerado relatório com ações corretivas.

---

## 4) Regra explícita: sem “teleporte” entre países

- O jogador **não troca instantaneamente** de país de operação.
- Para operar em novo território, é obrigatório:
  1. abrir presença legal aprovada,
  2. registrar operação fiscal local,
  3. alocar equipe mínima local.
- Até a conclusão desses passos, o país-alvo aparece como **“Em implantação”** e não gera receita operacional local.

---

## 5) Tabela de balanceamento por país (dificuldade)

> Índice de dificuldade (0–100): valor agregado para tuning interno. Não precisa ser exibido ao jogador final.

| País | Custo de entrada (1-5) | Complexidade legal (1-5) | Risco regulatório (1-5) | Pressão de custos (1-5) | Índice de dificuldade (0-100) |
|---|---:|---:|---:|---:|---:|
| Brasil | 3 | 4 | 3 | 3 | 66 |
| Estados Unidos | 4 | 2 | 2 | 4 | 62 |
| Alemanha | 5 | 3 | 1 | 5 | 74 |
| Índia | 2 | 4 | 3 | 2 | 58 |
| México | 2 | 3 | 3 | 2 | 52 |
| Singapura | 4 | 1 | 1 | 4 | 50 |
| Emirados Árabes Unidos | 3 | 2 | 2 | 3 | 48 |
| Japão | 4 | 3 | 1 | 4 | 60 |

### Fórmula de referência para o índice de dificuldade

`indice = (custo_entrada*0,30 + complexidade_legal*0,30 + risco_regulatorio*0,20 + pressao_custos*0,20) * 20`

### Diretrizes de tuning
- Se um país estiver sendo escolhido demais, aumentar custo de entrada ou risco regulatório em +1.
- Se estiver sendo ignorado, reduzir complexidade legal ou custo de entrada em -1.
- Revisar a tabela a cada ciclo de playtest (mínimo 20 sessões).

---

## 6) Validação do processo (fim a fim)

Esta seção existe para responder objetivamente se o processo “está dando certo”.

### 6.1 Checklist operacional

- [ ] O jogador seleciona país inicial e recebe capital inicial corretamente.
- [ ] Sem aprovação inicial, jogador permanece em **Pré-operação** e não fatura.
- [ ] Requisitos de expansão bloqueiam solicitação quando faltam capital/tempo/compliance.
- [ ] Expansão aprovada cria status **Em implantação** antes de **Operação Local** no país-alvo.
- [ ] Não é possível gerar receita no país-alvo sem presença legal aprovada.
- [ ] Reprovação aplica perda parcial de taxas e cooldown de nova tentativa.

### 6.2 Cenários de teste recomendados

| ID | Cenário | Entrada | Resultado esperado |
|---|---|---|---|
| CT-01 | Abertura inicial válida | País inicial + taxa + docs completos | Aprovação e transição para **Operação Local** |
| CT-02 | Abertura inicial inválida | Falta de documento obrigatório | Permanência em **Pré-operação** |
| CT-03 | Expansão sem requisito | Menos de 12 meses de operação | Solicitação bloqueada com motivo explícito |
| CT-04 | Expansão válida | Requisitos completos + capital suficiente | Processo iniciado com tempo de aprovação calculado |
| CT-05 | Reprovação regulatória | Compliance baixo + docs incompletos | Reprovação, perda de taxa e cooldown aplicados |
| CT-06 | Regra anti-teleporte | Tentativa de operar sem aprovação local | Operação negada no país-alvo |

### 6.3 Métricas de saúde do sistema

- **Taxa de aprovação por país** (meta inicial: 55%–80% para tentativas válidas).
- **Tempo médio de aprovação** por tipo de presença.
- **Taxa de reprovação por motivo** (para identificar gargalos de UX/compliance).
- **Distribuição de escolha de país inicial** (para detectar desbalanceamento).
- **Tempo até primeira expansão** (indicador de progressão do jogo).

---

## Critérios de aceitação da feature
- Existem entre **6 e 10 países** no MVP (aqui: 8).
- Cada país possui os 5 atributos obrigatórios definidos.
- Expansão internacional exige caminho legal completo (sem teleporte).
- Sistema contempla requisitos, custos, tempo de aprovação e chance de reprovação.
- Existe tabela de balanceamento para ajuste contínuo de dificuldade.
- Existe checklist e cenários de validação para confirmar que o fluxo funciona ponta a ponta.
