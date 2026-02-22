const employees = [
    { name: "Michael", hourlyRate: 20, hoursWorked: 30 },
    { name: "Oscar", hourlyRate: 21, hoursWorked: 40 },
    { name: "Miriam", hourlyRate: 22, hoursWorked: 50 },
    { name: "Edwin", hourlyRate: 23, hoursWorked: 45  }
];
function calculateBasePay(rate, hours) {
    const baseHours = hours > 40 ? 40 : hours;
    return baseHours * rate;
}
function calculateOvertimePay(rate, hours) {
    if (hours <= 40) return 0;
    const overtimeHours = hours - 40;
    return overtimeHours * (rate * 1.5);
}
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxAmount = calculateTaxes(grossPay);
    const netPay = grossPay - taxAmount;

    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPaay
    };
}
for (let i = 0; i < employees.length; i++) {
    const payrollReport = processPayroll(employees[i]);
    console.log(payrollReport);
};
