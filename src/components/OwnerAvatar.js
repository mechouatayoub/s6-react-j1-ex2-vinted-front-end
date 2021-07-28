function OwnerAvatar({ userName, url }) {
  //   console.log("user avat url:", url);
  function color() {
    return backAvatarColor[Math.floor(Math.random() * backAvatarColor.length)];
  }
  return (
    <div className="userAvatar">
      <div className="avatarWidth">
        <div className="avatarHeight" style={{ backgroundColor: color() }}>
          <div className="avatar">
            {" "}
            {url ? "T" : userName.length > 0 ? userName[0].toUpperCase() : null}
          </div>
        </div>
      </div>
      <div className="userName">{userName}</div>
    </div>
  );
}

const backAvatarColor = [
  "#56c7f2",
  "#750062",
  "#341800",
  "#df5693",
  "#1C2833",
  "#873600",
  "#9C640C",
  "#1D8348",
  "#0E6655",
  "#21618C",
  "#5B2C6F",
  "#943126",
  "#fa3e51",
  "#f0c569",
  "#5181c3",
  "#907cb0",
  "#4d464d",
  "#8c3e55",
  "#534153",
];
export default OwnerAvatar;
