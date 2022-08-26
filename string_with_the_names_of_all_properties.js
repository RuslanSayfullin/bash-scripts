let employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )}
}

let objj = Object.keys(employees);
let result = (objj.replace(/\./g, ', '));
console.log(result);