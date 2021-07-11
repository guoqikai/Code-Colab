import { useSelector } from "react-redux";
import { toastSelectors } from "../../redux/selectors";
import ColabToast from "./toast";
import "./toast-group.css";


const ToastGroup = () => {
  const toastsOrder = useSelector(toastSelectors.selectToastOrder);
  return (
    <div aria-live="polite" aria-atomic="true" className="toast-group">
      {toastsOrder.map((tid) => (
        <ColabToast key={tid} _id={tid}/>
      ))}
    </div>
  );
};

export default ToastGroup;
