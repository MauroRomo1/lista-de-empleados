import { Badge, ListGroup } from "react-bootstrap";

const EmployeeCard = ({ employee }) => {
  return (
    <ListGroup.Item>
      <div className="d-flex position-relative">
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
          className="img-fluid flex-shrink-0 me-3 avatarStaff"
          alt={employee.fullName}
        />
        <div>
          <h5 className="mt-0">{employee.fullName}</h5>
          <p>
            {employee.title}{" "}
            <Badge pill bg="primary">
              {employee.department}
            </Badge>
          </p>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default EmployeeCard;
