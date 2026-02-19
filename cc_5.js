let employees = [
    {name: "Alice", hoursWorked: 40, hourlyRate: 15},
    {name: "Bob", hoursWorked: 35, hourlyRate: 20},
    {name: "Charlie", hoursWorked: 45, hourlyRate: 10},
    {name: "David", hoursWorked: 30, hourlyRate: 25},
    {name: "Eve", hoursWorked: 50, hourlyRate: 12}
];
function calculateBasePay(rate, hours) {
    return rate * hours;
}
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (hours - 40) * rate * 1.5;
    }
    return 0;
}
function calculateTaxes (grossPay) {
    if (grossPay > 0) {
        return grossPay * 0.85;
    }
    return 0;
}
function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = basePay + overtimePay;
    let netPay = calculateTaxes(grossPay);
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    };
}
for (let i = 0; i < employees.length; i++) {
    let payrollInfo= processPayroll(employees[i]);
    console.log(payrollInfo);
}