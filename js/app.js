const incomes = [
    new Income('Salario', 2100.45),
    new Income('Venta Wii U', 250.50)
];

const bills = [
    new Bill('Alquiler', 450),
    new Bill('Luz', 98)
];

let loadApp = () => {
    loadHero();
    loadIncomes();
    loadBills();
}

let totalIncomes = () => {
    let totalIncome = 0;
    for (let income of incomes) {
        totalIncome += income.value;
    }
    return totalIncome;
}

let totalBills = () => {
    let totalBill = 0;
    for (bill of bills) {
        totalBill += bill.value
    }
    return totalBill;

}

let loadHero = () => {
    let budget = totalIncomes() - totalBills();
    let percentBill = totalBills() / totalIncomes();

    document.getElementById('budget').innerHTML = formatCurrency(budget);
    document.getElementById('percent').innerHTML = formatPercent(percentBill);
    document.getElementById('incomes').innerHTML = formatCurrency(totalIncomes());
    document.getElementById('bills').innerHTML = formatCurrency(totalBills());
}

const formatCurrency = (value) => {
    return value.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    });
}

const formatPercent = (value) => {
    return value.toLocaleString('es-ES', {
        style: 'percent',
        minimumFractionDigits: 2
    });
}
/* Load Incomes template */
const loadIncomes = () => {
    let incomesHTML = '';
    for (let income of incomes) {
        incomesHTML += createIncomeHTML(income);
    }
    document.getElementById('list-incomes').innerHTML = incomesHTML;
}

const createIncomeHTML = (income) => {
    let incomeHTML = `
              <div class="element clineUpStyles">
            <div class="element_description">${income.description}</div>
            <div class="right clineUpStyles">
              <div class="element_value">+ ${formatCurrency(income.value)}</div>
              <div class="element_delete">
                <button class="element_delete--btn">
                  <ion-icon name="close-circle-outline"
                  onclick='deleteIncome(${income.id})'></ion-icon>
                </button>
              </div>
            </div>
          </div>
    `;
    return incomeHTML;
}

const deleteIncome = (id) => {
    let deleteIndex = incomes.findIndex(income => income.id === id);
    incomes.splice(deleteIndex, 1);
    loadHero();
    loadIncomes();
}

const loadBills = () => {
    let billsHTML = '';
    for (let bill of bills) {
        billsHTML += createBilleHTML(bill);
    }
    document.getElementById('list-bills').innerHTML = billsHTML;
}

const createBilleHTML = (bill) => {
    let billHTML = `
              <div class="element clineUpStyles">
            <div class="element_description">${bill.description}</div>
            <div class="right clineUpStyles">
              <div class="element_value">- ${formatCurrency(bill.value)}</div>
              <div class="element_percent">${formatPercent(bill.value/totalBills())}</div>
              <div class="element_delete">
                <button class="element_delete--btn">
                  <ion-icon name="close-circle-outline"
                  onclick='deleteBill(${bill.id})'></ion-icon>
                </button>
              </div>
            </div>
          </div>
    `;
    return billHTML;
}

const deleteBill = (id) => {
    let deleteIndex = bills.findIndex(bill => bill.id === id);
    bills.splice(deleteIndex, 1);
    loadHero();
    loadBills();
}

let addData = () => {
    let form = document.forms['form'];
    let type = form['type'];
    let description = form['description'];
    let value = form['value'];

    if (description.value !== '' && value.value !== ' ') {
        if (type.value === 'income') {
            incomes.push(new Income(description.value, Number(value.value))); /**Otra opcion es sustituir Number() por + */
            loadHero();
            loadIncomes();
        } else if (type.value === 'bill') {
            bills.push(new Bill(description.value, +value.value));
            loadHero();
            loadBills();
        }
    }
}