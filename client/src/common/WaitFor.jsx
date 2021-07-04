import { useState, useEffect, createElement } from "react";

const WaitFor = ({ resovle, fallback, render }) => {
  const [resovledValue, setResovledValue] = useState(null);
  useEffect(() => {
    resovle().then((props) => setResovledValue(props));
  }, [resovle]);

  if (resovledValue !== null)
    return createElement(render, resovledValue);
  if (typeof(fallback) === "function")
    return createElement(fallback);
  if (fallback)
    return fallback
  return null;
};

export default WaitFor;
