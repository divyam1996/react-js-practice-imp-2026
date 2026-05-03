let company={ sales:[{name: 'John', salary: 1000}, 
        {name: 'Alice', salary: 1600 }],
development: { 
        sites: [{name: 'Peter', salary: 2000}, 
        {name: 'Alex', salary: 1800 }], 
        internals: [{name: 'Jack', salary: 1300}] } 

};

// console.log(Object.values(company));

function getTotalSalary(department) {
  if (Array.isArray(department)) {
    return department.reduce((sum, emp) => sum + emp.salary, 0);
  }

  let sum = 0;
  for (let sub of Object.values(department)) {
    sum += getTotalSalary(sub);
  }

  return sum;
}

console.log(global);

console.log(getTotalSalary(company));