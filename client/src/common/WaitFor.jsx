import { useState, useEffect, createElement, useRef, useCallback } from "react";

const WaitFor = ({
  resolve,
  args,
  mapHooksToProps,
  mapResolvedValToProps,
  pending,
  error,
  render,
  ...rest
}) => {
  const [status, setStatus] = useState("pending");
  const [payLoad, setPayLoad] = useState({});
  const isMount = useRef(false);

  const fetch = useCallback(
    async (newArgs) => {
      setStatus("pending");
      try {
        const data = await resolve(...(newArgs || args || []));
        if (isMount.current) {
          setPayLoad(data);
          setStatus("fulfilled");
        }
      } catch (error) {
        if (isMount.current) {
          setPayLoad(error);
          setStatus("error");
        }
      }
    },
    [resolve, args]
  );
  useEffect(() => {
    isMount.current = true;
    fetch();
    return () => (isMount.current = false);
  }, [fetch]);

  const makeComponent = (component) => {
    const setters = mapHooksToProps ? mapHooksToProps(fetch, setPayLoad) : {};

    const mappedPayLoad = mapResolvedValToProps
      ? mapResolvedValToProps(payLoad)
      : payLoad;
    if (typeof component === "function")
      return createElement(component, {
        ...rest,
        ...mappedPayLoad,
        ...setters,
      });
    return component;
  };

  if (status === "error") return makeComponent(error, payLoad);
  if (status === "fulfilled") return makeComponent(render, payLoad);
  return makeComponent(pending, payLoad);
};

export default WaitFor;
