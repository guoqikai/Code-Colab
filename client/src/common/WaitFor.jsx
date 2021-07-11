import {
  useState,
  useEffect,
  createElement,
  useRef,
} from "react";

const WaitFor = ({
  resolve,
  args,
  mapPayLoadSettersToProps,
  pending,
  error,
  render,
  ...rest
}) => {
  const [status, setStatus] = useState("pending");
  const [payLoad, setPayLoad] = useState({});
  const isMount = useRef(false);

  const fetch = (newArgs) => {
    resolve(...(newArgs || args || []))
      .then((data) => {
        if (isMount.current) {
          setPayLoad(data);
          setStatus("fulfilled");
        }
      })
      .catch((error) => {
        if (isMount.current) {
          setPayLoad(error);
          setStatus("error");
        }
      });
  };
  useEffect(() => {
    isMount.current = true;
    fetch();
    return () => (isMount.current = false);
  }, [resolve, args]);

  const makeComponent = (component) => {
    const setters = mapPayLoadSettersToProps
      ? mapPayLoadSettersToProps(fetch, setPayLoad)
      : {};
    if (typeof component === "function")
      return createElement(component, { ...rest, ...payLoad, setters });
    return component;
  };

  if (status === "error") return makeComponent(error, payLoad);
  if (status === "fulfilled") return makeComponent(render, payLoad);
  return makeComponent(pending, payLoad);
};

export default WaitFor;
