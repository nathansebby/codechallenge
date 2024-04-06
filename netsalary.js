function netPay(){
  const taxRate = 0.3;
  const nhifRate = 0.02;
  const nssfRate = 0.01;

  
  const basicSalary = parseFloat(prompt("Enter your basic salary: "));
  const allowances = parseFloat(prompt("Enter your total allowances: "));

  
  const grossSalary = basicSalary + allowances;

  

  const nssfDeduction = Math.min(grossSalary * nssfRate);
  const nhifDeduction = Math.min(grossSalary * nhifRate);
  const paye = Math.max(grossSalary - nhifDeduction - nssfDeduction) * taxRate

 
  const netSalary = grossSalary - nhifDeduction - nssfDeduction - paye;

  
  console.log(window.alert(`NHIF deduction is: ${nhifDeduction}`));
  console.log(window.alert(`NSSF deduction: ${nssfDeduction}`));
  console.log(window.alert(`PAYE: ${paye}`));
  console.log(window.alert(`The gross salary is: ${grossSalary}`));
  console.log(window.alert(`The net pay: ${netSalary}`)); 
}
netPay(4000);
  
