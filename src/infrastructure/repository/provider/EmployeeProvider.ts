import IEmployeeProvider from "../../../domain/interfaces/driven/provider/IEmployeeProvider";
import Employee from "../../../domain/model/employee/Employee";
import MySqlDBC from "../../../util/database/MySqlDBC";

export default class EmployeeProvider implements IEmployeeProvider {
  constructor(private readonly mySqlDBC: MySqlDBC) {}

  findAll(): Employee[] {
    const query = "SELECT * FROM employee";
    const result = this.mySqlDBC.query(query);
    return result;
  }

  findEmployee(id: number): Employee {}
}
