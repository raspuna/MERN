class User {
    constructor(userName, userEmail) {
        this.name = userName
        this.email = userEmail
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount
    }
    makeWithdraw(amount) {
        this.accountBalance -= amount
    }
    displayBalance(){
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`)
    }
    transferMoney(user, amount){
        this.accountBalance -= amount
        user.makeDeposit(amount)
    }

}

const tester = new User("Jaguar", "Jag@zoo.com");

console.log(tester)
console.log(tester.name)


tester.makeDeposit(100)
tester.makeDeposit(3)
tester.makeDeposit(10)
tester.makeWithdraw(70)

console.log(tester)
tester.displayBalance()

const student = new User("Penny", "penny@mail.com")
const teacher = new User("Shelden", "shelden@mail.com")

student.makeDeposit(22)
student.makeDeposit(22)
student.makeWithdraw(11)
student.makeWithdraw(11)
student.displayBalance()

teacher.makeDeposit(777)
teacher.makeWithdraw(100)
teacher.makeWithdraw(100)
teacher.makeWithdraw(100)
teacher.displayBalance()

tester.transferMoney(teacher, 43)
tester.displayBalance()
teacher.displayBalance()

