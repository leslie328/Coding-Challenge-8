// Task 1: Create an Employee Class
class Employee:{
def init(self, name, salary, position, department):
{ 
    this.name = "Alisa Jones";
    this.department = "Marketing";
    this.position = "Manager";
    this.salary = "50000";
    String details = employee.getDetails("Alisa Jones", "Manager", $"50000");
}
{   
    this.name = "John Adams";
    this.department = "IT";
    this.position = "SoftwareDeveloper";
    this.salary= "80000";
    String details = employee.getDetails("John Adams", "SoftwareDeveloper", $"80000");
}
{ 
    this.name = "James Johnson";
    this.department = "Engineering";
    this.position = "Designer";
    this.salary = 90000
    String details = employee.getDetails("James Johnson", "Designer", $"90000");
}

// Task 2: Create a Department Class
const engineering= new department("Engineering");
const SoftwareDeveloper= new department("SoftwareDeveloper");
const IT= new department("IT");
// Create employees
const Alisa= new Manager("Alisa",50000,"Marketing Manager","Marketing");
const John= new Employee("John", 80000, "SoftwareDeveloper", "IT")
const James= new Employee("James", 90000 "Designer", "Engineering");

// Add employees to departments
Marketing.addManager(Alisa);
IT.addEmployee(John);
engineering.addEmployee(James);

//Calculate Total salary for each department
console.log(`Total salary for marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary for SoftwareDeveloper:$${SoftwareDeveloper.getDepartmentSalary()}`)
console.log(`Total salry for Designer:$${Designer.getDepartmentSalary()}`)




}