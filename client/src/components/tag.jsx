import { Badge } from "react-bootstrap";
import "./tag.css";

const tagStyles = {
  default: "bg-dark text-white colab-tag-nonselect",
  selected: "colab-bg-green text-dark colab-tag",
  selectable: "bg-white text-dark colab-tag",
};

const Tag = ({ name, type, info, onClick, className }) => {
    return (
      <Badge className={tagStyles[type || "default"] + " " + (className ? className : "")} onClick={onClick}>
        {name} {info && <Badge className="bg-dark text-white ms-2">{info}</Badge>}
      </Badge>
    );
};

export default Tag;