let income = 20000,
    mission = 100000,
    numbersArr,
    budgetDay,
    period = 8;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let getStart = function() {
  do {
    money = prompt('“Ваш месячный доход?”');

  } while (!isNumber(parseFloat(money)));
};

let start = getStart();

let addExpenses = prompt('“Перечислите возможные расходы за рассчитываемый период через запятую”'),
    deposit = confirm('“Есть ли у вас депозит в банке?”'),
    expenses1 = prompt('“Введите обязательную статью расходов?”'),
    amount1 = prompt('“Во сколько это обойдется?”'),
    expenses2 = prompt('“Введите обязательную статью расходов?”'),
    amount2 = prompt('“Во сколько это обойдется?”');

function getExpensesMonth() {
  return (isNumber(amount1 + amount2)) < start;
}

let ExpensesMonth = getExpensesMonth();

console.log('Расходы :', ExpensesMonth);

function getAccumulatedMonth() {
  return money - ExpensesMonth;
}

let accumulatedMonth = getAccumulatedMonth();

console.log('Месячный бюджет :', accumulatedMonth);


function getTargetMonth() {
  if (Math.ceil(mission / accumulatedMonth)) {
    return ('“Цель будет достигнута”');
  } else {
    return ('“Цель не будет достигнута”');
  }
}

let TargetMonth = getTargetMonth();

console.log(TargetMonth);

console.log('Цель будет достигнута: ', TargetMonth);

budgetDay = Math.floor(accumulatedMonth / 30);

console.log('budgetDay ' + budgetDay);


let getStatusIncome = function() {
  if (budgetDay >= 1200) {
    console.log('“У вас высокий уровень дохода”');
  } else if (budgetDay >= 600) {
    console.log('“У вас средний уровень дохода”');
  } else if (budgetDay < 600) {
    console.log('“К сожалению у вас уровень дохода ниже среднего”');
  } else if (budgetDay < 0) {
    console.log('“Что то пошло не так”');
  }
}

getStatusIncome();


// console.log(typeof money, typeof income, typeof deposit);
// console.log('Длина строки - addExpenses: ' + addExpenses.length + ' символов');
console.log(`“Цель заработать 100000 рублей: ${TargetMonth}"`);

// let Expenses = addExpenses.toLowerCase();
// let ArrExpenses = Expenses.split(',');
// let Result = ArrExpenses.join()

// console.log(Result);

// let budgetDay = money / 30;

// console.log(`budgetDay: ${budgetDay}`);
