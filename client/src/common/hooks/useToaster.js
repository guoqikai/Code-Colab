import { nanoid } from "nanoid/non-secure";
import { useDispatch } from "react-redux";
import { toastActions } from "../../redux/actions";

const useToaster = () => {
  const dispatch = useDispatch();
  return {
    makeToast: (...args) => {
      const _id = nanoid(10);
      dispatch(
        toastActions.makeToast(_id, ...args)
      );
      return _id;
    },
    makeToastWithId: (...args) =>
      dispatch(toastActions.makeToast(...args)),
    closeToast: (...args) =>
      dispatch(toastActions.closeToast(...args)),
  };
};

export default useToaster;