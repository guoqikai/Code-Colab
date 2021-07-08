import { useState, useEffect, useRef } from "react";

const reasonDesc = {
  fetching: "one of the callbacks is waiting for result",
  unmounted: "the component is unmunted",
  forwarded: "the error is explicitly forwarded by user",
};

class SafeAsyncError extends Error {
  constructor(reason, payLoad) {
    super("useSafeAsyncCallbacks: " + reasonDesc[reason]);
    this.payLoad = payLoad;
  }
}

const useSafeAsyncCallbacks = (asyncCallbacks) => {
  const isMounted = useRef(false);
  const [isFetching, setFetching] = useState(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });
  return [
    Object.fromEntries(
      Object.entries(asyncCallbacks).map(([k, v]) => [
        k,
        async (...args) => {
          let resolvedValue, resolvedError;
          if (isFetching) throw new SafeAsyncError("fetching");
          setFetching(true);
          try {
            resolvedValue = await v(...args);
          } catch (err) {
            resolvedError = err;
          }

          if (!isMounted.current)
            throw new SafeAsyncError("unmounted", [
              resolvedValue,
              resolvedError,
            ]);
          setFetching(false);
          return [resolvedValue, resolvedError];
        },
      ])
    ),
    isFetching,
  ];
};

export const forward = (val, err) => {
  throw new SafeAsyncError("forwarded", [val, err]);
};

export default useSafeAsyncCallbacks;
