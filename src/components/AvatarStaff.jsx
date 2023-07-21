const AvatarStaff = ({ fullName, pic }) => {
  return (
    <img
      src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
      className="img-fluid flex-shrink-0 me-3 avatarStaff"
      alt={fullName}
    />
  );
};

export default AvatarStaff;
