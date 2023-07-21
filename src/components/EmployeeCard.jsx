import { Badge, ListGroup } from "react-bootstrap";
import AvatarStaff from "./avatarStaff.jsx";

const EmployeeCard = ({ employee }) => {
  return (
    <ListGroup.Item>
      <div className="d-flex position-relative">
        <AvatarStaff fullName={employee.fullName} pic={employee.pic} />
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
