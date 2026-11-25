# ⚡ Exercícios Práticos de JavaScript Puro (Execução via Node.js / Terminal)

Este diretório contém 4 problematizações do mundo real projetadas para ensinar e consolidar os conceitos fundamentais de JavaScript executado no terminal.

---

## 📌 Guia de Execução

No terminal do VS Code ou do seu sistema operacional, navegue até a pasta dos exercícios e execute:

```bash
node problema1_combustivel.js
node problema2_imc.js
node problema3_ecommerce.js
node problema4_relatorio_vendas.js
```

---

## 📜 Lista de Problematizações Didáticas

### 🚚 Problema 1: Consumo e Custo de Combustível de uma Frota
* **Conceitos Trabalhados:** Declaração de variáveis (`const`, `let`), tipos primitivos (`Number`, `String`), operadores aritméticos (`/`, `*`), formatação com `.toFixed()`.
* **Cenário:** Um motorista de entregas realizou uma viagem de 450 km gastando 37,5 litros de combustível (preço R$ 5,89/L). O sistema deve calcular o consumo médio (km/L), o custo total da viagem e o custo por quilômetro rodado.

### 🏋️ Problema 2: Triagem de Avaliação Física e IMC
* **Conceitos Trabalhados:** Operadores relacionais/comparação estrita (`===`, `>`, `<`), estruturas condicionais compostas (`if` / `else if` / `else`).
* **Cenário:** Uma academia automatizou o cálculo do IMC dos alunos (Massa / Altura²) e precisa exibir relatórios no terminal classificando o aluno em faixas (Abaixo do Peso, Peso Normal, Sobrepeso ou Obesidade) acompanhados de uma recomendação de treino.

### 🛒 Problema 3: Motor de Regras de E-Commerce (Frete e Descontos)
* **Conceitos Trabalhados:** Operadores lógicos (`&&` AND, `||` OR), operadores de atribuição e ternários.
* **Cenário:** Um e-commerce concede **Frete Grátis** se a compra for >= R$ 250,00 **OU** se o cliente for VIP. Concede **15% de Desconto** se o pagamento for via `pix` **E** o cupom for `QUERO15`. O programa calcula o total bruto, aplica as regras e exibe o resumo de checkout.

### 📊 Problema 4: Auditoria de Vendas Semanal
* **Conceitos Trabalhados:** Laços de repetição (`for`), arrays, acumuladores (`+=`), contadores (`++`), busca de maior valor.
* **Cenário:** Um comerciante anotou as vendas de Segunda a Domingo. O script deve percorrer o histórico semanal, identificar quais dias bateram a meta diária (R$ 600,00), calcular a média diária de vendas e identificar o dia com o maior recorde de vendas.
