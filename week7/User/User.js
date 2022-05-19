class User {
    constructor(userName, userEmail) {
        this.name = userName
        this.email = userEmail
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount
        return this
    }
    makeWithdraw(amount) {
        this.accountBalance -= amount
        
        return this
    }
    displayBalance(){
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`)
        return this
    }
    transferMoney(user, amount){
        this.accountBalance -= amount
        user.makeDeposit(amount)
        return this
    }

}

const tester = new User("Jaguar", "Jag@zoo.com");

console.log(tester)
console.log(tester.name)


tester.makeDeposit(100).makeDeposit(3).makeDeposit(10).makeWithdraw(70)

console.log(tester)
tester.displayBalance()

const student = new User("Penny", "penny@mail.com")
const teacher = new User("Shelden", "shelden@mail.com")

student.makeDeposit(22).makeDeposit(22).makeWithdraw(11).makeWithdraw(11).displayBalance()

teacher.makeDeposit(777)
.makeWithdraw(100)
.makeWithdraw(100)
.makeWithdraw(100)
.displayBalance()

tester.transferMoney(teacher, 43).displayBalance()
teacher.displayBalance()

