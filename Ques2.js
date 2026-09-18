class BankAccount {
    static bankInfo() {
        console.log("Bank: ABC");
    }
    constructor(no, name, balance) {
        this.no = no;
        this.name = name;
        this.balance = balance;
    }
    deposit(a) {
        this.balance += a;
    }
    withdraw(a) {
        if (a <= this.balance)
            this.balance -= a;
        else
            console.log("Insufficient Balance");
    }
    display() {
        console.log(this.no, this.name, this.balance);
    }
}
let a1 = new BankAccount(101, "Kakul", 5000);
let a2 = new BankAccount(102, "Vansh", 3000);
BankAccount.bankInfo();
a1.deposit(1000);
a1.withdraw(2000);
a1.display();

a2.deposit(500);
a2.withdraw(5000);
a2.display();