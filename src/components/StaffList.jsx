import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { employees } from "../employees.js";

const StaffList = () => {
  return (
    <section className="container my-3">
      <div className="row justify-content-center">
        <div className="col col-md-6">
          <ListGroup>
            {employees.map((employee) => (
              <ListGroup.Item key={employee.id}>
                <div className="d-flex position-relative">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    className="img-fluid flex-shrink-0 me-3"
                    width={80}
                    alt="..."
                  />
                  <div>
                    <h5 className="mt-0">Julian Karkov</h5>
                    <p>
                      CEO{" "}
                      <Badge pill bg="primary">
                        Diseñador
                      </Badge>
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </section>
  );
};

export default StaffList;
