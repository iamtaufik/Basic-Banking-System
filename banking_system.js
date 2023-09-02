import { BankAccount } from './bank_account.js';

const account = new BankAccount('John Doe', 1000);

async function run() {
  try {
    // Skenario Testing

    // Skenario 1 -> Berhasil melakukan deposit
    const balance = await account.deposit(500);
    console.log(`Deposit 500, balance: ${balance}`);

    // Skenario 2 -> Gagal melakukan deposit karena amount tidak valid
    await account.deposit(-500);

    // Skenario 3 -> Berhasil melakukan withdraw
    const balance2 = await account.withdraw(200);
    console.log(`Withdraw 200, balance: ${balance2}`);

    // Skenario 4 -> Gagal melakukan withdraw karena amount tidak valid
    await account.withdraw(-200);

    // Skenario 5 -> Gagal melakukan withdraw karena saldo kurang
    await account.withdraw(10000);
  } catch (error) {
    console.log(error);
  }
}

run();
