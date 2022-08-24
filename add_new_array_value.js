let employee =[["firstName","Ivan"],["hireDate","21.10.2016"],["hireDate","21.10.2015"]];

function countString(employee) {

    for (let index = 0; index < employee.length; index++) {
         if (((employee[index])[0]) == "hireDate"){
            employee.pop(employee[index]);
         }
    }
    for (let index = 0; index < employee.length; index++) {
         if (((employee[index])[0]) == "hireDate"){
            employee.pop(employee[index]);
         }
    }
    employee.push(["jobName", "IT PROG"]);
    console.log(employee);
}

countString(employee)