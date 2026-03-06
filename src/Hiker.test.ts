
// Given a client
// makes a deposit of 1000 on 10-01-2012
// And a deposit of 2000 on 13-01-2012
// And a withdrawal of 500 on 14-01-2012
// When she prints her bank statement
// Then she would see
// date || credit || debit || balance
// 14/01/2012 || || 500.00 || 2500.00
// 13/01/2012 || 2000.00 || || 3000.00
// 10/01/2012 || 1000.00 || || 1000.00

type Screen = { printLn: (line: string) => void }

type StatementRepository = {
  findAll: () => Statement[]
}
type Statement = Deposit | Withdrawal;
type Deposit = {
  type: 'DEPOSIT',
  amount: Amount,
  date: string
}
type Withdrawal = {
  type: 'WITHDRAWAL',
  amount: Amount,
  date: string
}
type Amount = number;

describe('BankingAccount', () => {
  it('test', () => {
    const statementRepository: StatementRepository = {
      findAll: jest.fn().mockReturnValue([
        { type: 'DEPOSIT', amount: 1000, date: "10-01-2012" },
        { type: 'DEPOSIT', amount: 2000, date: "13-01-2012" },
        { type: 'WITHDRAWAL', amount: 500, date: "14-01-2012" }
      ])
    }

    const screen: Screen = {
      printLn: jest.fn()
    }

    var account = new BankingAccount(screen, statementRepository);
    account.printStatement();

    expect(screen.printLn).toHaveBeenNthCalledWith(1,
      "date || credit || debit || balance",
    )
    expect(screen.printLn).toHaveBeenNthCalledWith(2,
      "14/01/2012 || || 500.00 || 2500.00",
    )
    expect(screen.printLn).toHaveBeenNthCalledWith(3,
      "13/01/2012 || 2000.00 || || 3000.00",
    )
    expect(screen.printLn).toHaveBeenNthCalledWith(4,
      "10/01/2012 || 1000.00 || || 1000.00",
    )
  })
})
