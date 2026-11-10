# 2. O Caixa Eletrônico (Financeiro/Segurança)

**Conteúdo:** Getters e Setters em JavaScript — Turma 202

**Objetivo:** criar um getter que formata dados para exibição e um setter rigoroso de segurança.

## Enunciado

1. Crie um objeto `conta` com as propriedades `titular` (`"João"`) e `_saldo` (`500`).
2. **Os Getters:**
   - `get saldo()`: retorna o **número** guardado em `_saldo`.
   - `get saldoFormatado()`: retorna o saldo como **texto** no formato brasileiro. Ex.: `"R$ 500,00 disponíveis"`.
     > Dica: `this._saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })`
3. **O Setter (`set saldo(novoSaldo)`):**
   - A regra do banco é clara: o saldo não pode ficar negativo (o limite de cheque especial é zero).
   - Se `novoSaldo` **não for um número**, imprima `"ERRO: valor inválido."` e não altere nada.
   - Se `novoSaldo` for **menor que 0**, imprima `"TRANSAÇÃO RECUSADA: Saldo insuficiente."` e proteja o valor antigo.
   - Caso contrário, atualize o `_saldo` e imprima `"Transação aprovada."`
4. Teste com o código abaixo. **Antes de rodar**, anote ao lado de cada linha o que você acha que vai aparecer:

```javascript
console.log(conta.saldoFormatado); // ?
conta.saldo -= 150.5;              // ?
console.log(conta.saldoFormatado); // ?
conta.saldo -= 1000;               // ?
conta.saldo = "mil";               // ?
console.log(conta.saldoFormatado); // ?
```

## Pergunta

Por que o enunciado pede **dois** getters (`saldo` e `saldoFormatado`)? O que aconteceria na linha `conta.saldo -= 150.5` se o `get saldo()` retornasse o texto `"R$ 500,00 disponíveis"` em vez do número?
