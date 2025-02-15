enum ExpenseCategory {
  HOUSING = "Housing",
  FOOD = "Food",
  TRANSPORTATION = "Transportation",
  ENTERTAINMENT = "Entertainment",
  OTHERS = "Others",
}

type TransactionType = "income" | "expense";

interface Transaction {
  id: number;
  description: string;
  category: ExpenseCategory | "Income";
  amount: number;
  type: TransactionType;
}

const incomeDesc = document.getElementById("income-description") as HTMLInputElement;
const incomeAmount = document.getElementById("income-amount") as HTMLInputElement;
const expenseDesc = document.getElementById("expense-description") as HTMLInputElement;
const expenseCategory = document.getElementById("expense-category") as HTMLSelectElement;
const expenseAmount = document.getElementById("expense-amount") as HTMLInputElement;
const TransactionTable = document.querySelector("tbody") as HTMLTableSectionElement;
const totalIncomeEl = document.getElementById("total-income") as HTMLElement;
const totalExpensesEl = document.getElementById("total-expenses") as HTMLElement;
const balanceEl = document.getElementById("balance") as HTMLElement;
let transactions: Transaction[] = JSON.parse(localStorage.getItem("transactions") || "[]");


function addIncome(): void {
    addTransaction(incomeDesc.value.trim(), "Income", parseFloat(incomeAmount.value), "income");
    incomeDesc.value = "";
    incomeAmount.value = "";
}


function addExpense(): void {
    addTransaction(expenseDesc.value.trim(), expenseCategory.value as ExpenseCategory, parseFloat(expenseAmount.value), "expense");
    expenseDesc.value = "";
    expenseAmount.value = "";
}

function addTransaction(description: string, category: ExpenseCategory | "Income", amount: number, type: TransactionType): void {
    if (!description || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const newTransaction: Transaction = {
        id: Date.now(),
        description,
        category,
        amount,
        type
    };

    transactions.push(newTransaction);
    load();
}


function deleteTransaction(id: number): void {
    transactions = transactions.filter(transaction => transaction.id !== id);
    load();
}


function clearAll(): void {
    if (confirm("Are you sure you want to clear all transactions?")) {
        transactions = [];
        load();
    }
}


function load(): void {
  TransactionTable.innerHTML = "";

  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((transaction) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>Description</td>
        <td>${transaction.description}</td>
        <td>${transaction.category}</td>
        <td>${transaction.amount.toLocaleString()}</td>
        <td>${transaction.type}</td>
        <td><button onclick="deleteTransaction(${
          transaction.id
        })">Delete</button></td>
        `;
    TransactionTable.appendChild(row);
    if (transaction.type === "income") {
      totalIncome += transaction.amount;
    } else {
      totalExpenses += transaction.amount;
    }
  });
  totalIncomeEl.textContent = totalIncome.toLocaleString();
  totalExpensesEl.textContent = totalExpenses.toLocaleString();
  balanceEl.textContent = (totalIncome - totalExpenses).toLocaleString();

  saveTransaction();
}

function saveTransaction() : void{
    localStorage.setItem("trasactions",JSON.stringify(transactions));
}
