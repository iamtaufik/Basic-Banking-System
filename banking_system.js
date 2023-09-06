import { BankAccount } from './bank_account.js';

const accountName = document.querySelector('#account');
const withdrawBtn = document.querySelector('#withdraw');
const depositBtn = document.querySelector('#deposit');
const balance = document.querySelector('#balance');
const errorMsg = document.querySelector('#error-msg');
const name = prompt('Masukkan nama anda: ');
accountName.innerHTML = `Selamat Datang, ${name}`;

const account = new BankAccount(name, 0);

balance.innerHTML = `Saldo anda: ${account.balance}`;

withdrawBtn.addEventListener('click', async function () {
  const amount = document.querySelector('#amount').value;

  try {
    errorMsg.innerHTML = '';
    this.innerHTML = `Loading...`;
    this.disabled = true;
    await account.withdraw(amount);
    balance.innerHTML = `Saldo anda: ${account.balance}`;
  } catch (error) {
    errorMsg.innerHTML = `Terjadi kesalahan: ${error}`;
  } finally {
    this.innerHTML = `Withdraw`;
    this.disabled = false;
  }
});

depositBtn.addEventListener('click', async function () {
  const amount = document.querySelector('#amount').value;

  try {
    this.innerHTML = `Loading...`;
    this.disabled = true;
    await account.deposit(amount);
    errorMsg.innerHTML = '';
    balance.innerHTML = `Saldo anda: ${account.balance}`;
  } catch (error) {
    errorMsg.innerHTML = `Terjadi kesalahan: ${error}`;
  } finally {
    this.innerHTML = `Deposit`;
    this.disabled = false;
  }
});
