//elaborar cadastro de funcionários com nome/telefone/idade/contá bancária

function Funcionarios(funcionario, idade, celular){
    this.nome = funcionario;
    this.idade = idade;
    this.celular = celular;
    
    this.contaBancaria = new ContaBancaria

    this.exibirinfor = function(){
        console.log(`Funcionário ${this.nome}, ${this.idade} anos, telefone:  ${this.celular}`);
        this.contaBancaria.exibirSaldo();
    };
}

//função construtora;

function ContaBancaria(){
    this.saldo = 0;

    this.depositar = function(valor){
        this.saldo += valor;
    };

    this.sacar = function(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
        } else {
            console.log("Você não têm dindin o suficiente para o saque.");
        }
    };


    this.exibirSaldo = function(){
        console.log(`Saldo= $${this.saldo}`)
    }
}

//instância;
const func1 = new Funcionarios("João", 20, "(41)99999-9999");
const func2 = new Funcionarios("Laurinha", 19, "(14)99988-5598");


//realizando operações na conta bancária dos func.;

func1.contaBancaria.depositar(1500);
func1.contaBancaria.sacar(200);

func2.contaBancaria.depositar(1800);
func2.contaBancaria.sacar(150);

//exiir informações dos funcionários;
func1.exibirinfor();
func2.exibirinfor();