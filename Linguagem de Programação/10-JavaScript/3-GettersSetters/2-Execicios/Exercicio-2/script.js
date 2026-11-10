const conta = {
    titular: "João",
    _saldo: 500,

    get saldo() {
        return this._saldo;
    },

    get saldoFormatado() {
        return this._saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + " disponíveis";
    },

    set saldo(novoSaldo) {
        if (typeof novoSaldo !== "number" || Number.isNaN(novoSaldo)) {
            console.log("ERRO: valor inválido.");
            return;
        }

        if (novoSaldo < 0) {
            console.log("TRANSAÇÃO RECUSADA: Saldo insuficiente.");
            return;
        }

        this._saldo = novoSaldo;
        console.log("Transação aprovada.");
    }
};

console.log(conta.saldoFormatado); // R$ 500,00 disponíveis
conta.saldo -= 150.5;              // Transação aprovada.
console.log(conta.saldoFormatado); // R$ 349,50 disponíveis
conta.saldo -= 1000;               // TRANSAÇÃO RECUSADA: Saldo insuficiente.   (349.5 - 1000 = -650.5)
conta.saldo = "mil";               // ERRO: valor inválido.
console.log(conta.saldoFormatado); // R$ 349,50 disponíveis