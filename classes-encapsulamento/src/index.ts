//ex 01

//a - são os parametros necessários para classe

//b

class Transaction {
  private date: string;
  private value: number;
  private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }

  getDate(): string {
    return this.date
  }

  getValue(): number {
    return this.value
  }

  getDescription(): string {
    return this.description
  }
}

//ex2
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    this.cpf = cpf;
    this.name = name;
    this.age = age
    
    console.log(`Usuário ${this.name} com o CPF ${this.cpf} e idade ${this.age} anos foi criado com sucesso.`)
    
  }

  getCpf(): string {
    return this.cpf
  }

  getName(): string {
    return this.name
  }
  
  getAge(): number {
    return this.age
  }

  addBalance(value: number): void {
     const newBalance = this.balance + value
      this.balance = newBalance
  }
}

const newUser = new UserAccount("12312312300", "Moisés", 100)

newUser

// foi impressa 3x.

//c através de dentro da própria classe, usando a keyword this.


//ex3
class Bank {
  public bankName: string;
  public accountType: string;
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[], bankName: string, accountType: string) {
    this.accounts = accounts;
    this.bankName = bankName;
    this.accountType = accountType

  }

}