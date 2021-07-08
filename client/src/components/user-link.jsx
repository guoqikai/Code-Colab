import { Link } from "react-router-dom";
import classNames from "classnames";

const UserLink = ({ name, _id, className }) => (
  <Link to={"/user/" + _id} className={classNames("text-info", className)}>
    {name}
  </Link>
);

export default UserLink;