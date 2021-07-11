import { Link } from "react-router-dom";

const UserLink = ({ userInfo, className }) => (
  <Link to={"/user/" + userInfo._id} className={className}>
    {userInfo.name}
  </Link>
);

export default UserLink;