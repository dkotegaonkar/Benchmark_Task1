var ExpenseCategory;
(function (ExpenseCategory) {
    ExpenseCategory["HOUSING"] = "Housing";
    ExpenseCategory["FOOD"] = "Food";
    ExpenseCategory["TRANSPORTATION"] = "Transportation";
    ExpenseCategory["ENTERTAINMENT"] = "Entertainment";
    ExpenseCategory["OTHERS"] = "Others";
})(ExpenseCategory || (ExpenseCategory = {}));
var incomeDesc = document.getElementById("income-description");
var incomeAmount = document.getElementById("income-amount");
var expenseDesc = document.getElementById("expense-description");
var expenseCategory = document.getElementById("expense-category");
var expenseAmount = document.getElementById("expense-amount");
var TransactionTable = document.querySelector("tbody");
var totalIncomeEl = document.getElementById("total-income");
var totalExpensesEl = document.getElementById("total-expenses");
var balanceEl = document.getElementById("balance");
var transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
function addIncome() {
    addTransaction(incomeDesc.value.trim(), "Income", parseFloat(incomeAmount.value), "income");
    incomeDesc.value = "";
    incomeAmount.value = "";
}
function addExpense() {
    addTransaction(expenseDesc.value.trim(), expenseCategory.value, parseFloat(expenseAmount.value), "expense");
    expenseDesc.value = "";
    expenseAmount.value = "";
}
function addTransaction(description, category, amount, type) {
    if (!description || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }
    var newTransaction = {
        id: Date.now(),
        description: description,
        category: category,
        amount: amount,
        type: type
    };
    transactions.push(newTransaction);
    load();
}
function deleteTransaction(id) {
    transactions = transactions.filter((transaction) => { return transaction.id !== id; });
    load();
}
function clearAll() {
    if (confirm("Are you sure you want to clear all transactions?")) {
        transactions = [];
        load();
    }
}
function load() {
    TransactionTable.innerHTML = "";
    var totalIncome = 0;
    var totalExpenses = 0;
    transactions.forEach(function (transaction) {
        var row = document.createElement("tr");
        row.innerHTML = "\n        <td>Description</td>\n        <td>".concat(transaction.description, "</td>\n        <td>").concat(transaction.category, "</td>\n        <td>").concat(transaction.amount.toLocaleString(), "</td>\n        <td>").concat(transaction.type, "</td>\n        <td><button onclick=\"deleteTransaction(").concat(transaction.id, ")\">Delete</button></td>\n        ");
        TransactionTable.appendChild(row);
        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        }
        else {
            totalExpenses += transaction.amount;
        }
    });
    totalIncomeEl.textContent = totalIncome.toLocaleString();
    totalExpensesEl.textContent = totalExpenses.toLocaleString();
    balanceEl.textContent = (totalIncome - totalExpenses).toLocaleString();
    saveTransaction();
}
function saveTransaction() {
    localStorage.setItem("trasactions", JSON.stringify(transactions));
}
