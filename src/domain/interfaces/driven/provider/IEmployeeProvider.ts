import Employee from "../../../model/employee/Employee";

export default interface IEmployeeProvider {
  findEmployee(id: number): Employee;
  findAll(): Employee[];
}
