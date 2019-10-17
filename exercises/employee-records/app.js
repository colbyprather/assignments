function Employees(Name, JobTitle, Salary, Status = "Full Time"){
    this.Name = Name;
    this.JobTitle = JobTitle;
    this.Salary = Salary;
    this.Status = Status;
}

var printEmployeeForm = new Employees("Bob", "V School Instructor", "3000/hr", "Part Time")
var printEmployeeFormTwo = new Employees("Joe", "V School TA", "3000/hr", "Part Time")
var printEmployeeFormThree = new Employees("Luke", "V School Job Councilor", "3000/hr", "Contract")
console.log(printEmployeeForm, printEmployeeFormTwo, printEmployeeFormThree)