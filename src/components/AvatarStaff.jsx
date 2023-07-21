import React from "react";

const avatarStaff = ({ fullName, pic }) => {
  return (
    <img
      src={pic}
      className="img-fluid flex-shrink-0 me-3 avatarStaff"
      alt={fullName}
    />
  );
};

export default avatarStaff;
