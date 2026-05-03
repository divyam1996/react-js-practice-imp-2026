var testObj = {
  bankId: 13,
  accounts: [
    {
      accountName: 'abc',
      currentBalance: {
        cash: 2000
      },
      subAccounts: []
    },
    {
      accountName: 'bcd',
      currentBalance: {
        cash: 5000
      },
      subAccounts: [
        {
          accountName: 'efg',
          currentBalance: {
            cash: 7000
          },
          subAccounts: [
            {
              accountName: 'kge',
              currentBalance: {
                cash: 6000
              },
              subAccounts: []
            }
          ]
        },
        {
          accountName: 'der',
          currentBalance: {
            cash: 10000
          },
          subAccounts: []
        }
      ]
    }
  ]
};
// console.log(Object.values(testObj));
function getTotalCash(accounts) {
  let total = 0;

  for (let acc of accounts) {

    total += acc.currentBalance.cash;

    if (acc.subAccounts && acc.subAccounts.length > 0) {
      total += getTotalCash(acc.subAccounts);
    }
  }

  return total;
}

console.log(getTotalCash(testObj.accounts));