import { Badge } from "react-bootstrap";
import classNames from "classnames";
import "./tag.css";

const Tag = ({ name, type, info, onClick, className }) => {
  return (
    <Badge
      className={classNames(className, {
        "badge-dark colab-tag-nonselect": !type || type === "default",
        "badge-secondary colab-tag-nonselect": !type || type === "info",
        "colab-bg-green text-white colab-tag-selected": type === "selected",
        "bg-white text-dark colab-tag": type === "selectable",
      })}
      onClick={onClick}
    >
      {name} {info && <Badge className="bg-dark text-white ms-2">{info}</Badge>}
    </Badge>
  );
};

export default Tag;
