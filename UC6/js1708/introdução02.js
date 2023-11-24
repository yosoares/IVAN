const minhaConta = conta(12345, 1000)
minhaConta.depositar(1500);
minhaConta.sacar(500);
minhaConta.juros(0.05);
minhaConta.emprestimo(1000);
minhaConta.prestacao_casa(800);

function conta(numero, saldoinicial) {

    return {

    saldo: saldoinicial,

        depositar: function (valor) {
            this.saldo += valor;
            console.log(`Com o depósito de ${valor}, o novo saldo da conta ${numero} é: ${this.saldo}`)
        },

        sacar: function (valor) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Com o saque de valor ${valor}, o novo saldo sua da conta ${numero} é: ${this.saldo}`)
            } else {
                console.log(`SEU POBRE, não tem dindin suficiente para o saque de ${valor}. O seu saldo atual é de ${this.saldo}`)
            }
        },
        
        juros: function(taxa){
            const jurosCalculados = this.saldo * taxa;
            this.saldo += jurosCalculados;
            console.log(`Pago juros de ${jurosCalculados}, sendo o saldo final: ${this.saldo}`);
        },

        emprestimo: function(valor){
            if(valor <= this.saldo){
                this.saldo -= valor;
                console.log(`Seu empréstimo de ${valor} foi aprovado!`);
            } else {
                console.log(`Você não tem saldo suficiente para um empréstimo de ${valor}`);
            }
        },

        prestacao_casa: function(valor){
            if(valor <= this.saldo){
                this.saldo -= valor;
                console.log(`Pagamento da prestação da casa no valor de ${valor} realizado. Novo saldo: ${this.saldo}`);
            } else {
                console.log(`Saldo insuficiente para a prestação da casa no valor de ${valor}`);
            }
        }
    }
}