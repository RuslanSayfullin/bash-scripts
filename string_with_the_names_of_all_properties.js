let employees = {
    firstName: "Петя",
    lastName: "Иванов",
    ratePerDay: 2500,
    workingDays: 5,
    getSalary() { console.log(employees.ratePerDay * employees.workingDays )}
}

let newArr = [];
for (let [key, value] of Object.entries(employees)) {
    if (typeof(value) !== 'function' ) {
        newArr.push([key])
    }
};
newArr = newArr.reduce((prev, current)=> prev.concat(current), [])
let str = newArr.join(', ')
console.log(str)