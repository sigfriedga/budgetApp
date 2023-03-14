const incomes = [
    new Income('Salario', 2100.45),
    new Income('Venta Wii U', 250.50) 
];

const bills = [
    new Bills('Alquiler', 450),
    new Bills('Luz', 98)
];

let loadApp = () =>{
    loadHero();
}

let totalIncomes = () =>{
    let totalIncome = 0;
    for(let income of incomes){
        totalIncome += income.value;
    }
    return totalIncome;
}

let totalBills = () =>{
    let totalBill = 0;
    for(bill of bills){
        totalBill += bill.value
    }
    return totalBill;
    
}

let loadHero = () =>{
    let budget = totalIncomes() - totalBills();
    let percentBill = totalBills() / totalIncomes();
    
    document.getElementById('budget').innerHTML = formatCurrency(budget);
    document.getElementById('percent').innerHTML = formatPercent(percentBill);
    document.getElementById('incomes').innerHTML = formatCurrency(totalIncomes());
    document.getElementById('bills').innerHTML = formatCurrency(totalBills());
}

const formatCurrency = (value) => {
    return value.toLocaleString('es-ES', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2});
}

const formatPercent = (value) => {
    return value.toLocaleString('es-ES', {style:'percent', minimumFractionDigits:2});
}