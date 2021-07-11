import React from "react";
import { Link } from "react-router-dom";
import { CloseButton, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { toastSelectors } from "../../redux/selectors";
import { toastActions } from "../../redux/actions";
import "./toast.css";

const ColabToast = React.memo(({ _id }) => {
  const dispacth = useDispatch();
  const { show, type, content } = useSelector((state) =>
    toastSelectors.selectToast(state, _id)
  );
  return (
    <Toast show={show} className="mw-100">
      <Toast.Body
        className={classNames("p-3 toast-body", {
          "colab-bg-warning colab-warning": type === "login" || type === "warning",
          "colab-bg-error colab-error": type === "error",
          "colab-bg-success colab-success": type === "success"
        })}
      >
        {content}{type === "login" && <Link className="ml-2">Login here</Link>}
        <CloseButton
          className="toast-close-button ml-2"
          onClick={() => dispacth(toastActions.closeToast(_id, 500))}
        />
      </Toast.Body>
    </Toast>
  );
});

export default ColabToast;
