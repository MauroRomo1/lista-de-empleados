import { ListGroup } from "react-bootstrap";

import { employees } from "../employees.js";
import EmployeeCard from "./EmployeeCard.jsx";

const StaffList = () => {
  return (
    <section className="container my-3">
      <div className="row justify-content-center">
        <div className="col col-md-6">
          <ListGroup>
            {employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </ListGroup>
        </div>
      </div>
    </section>
  );
};

export default StaffList;
